// import express
const express = require('express');
// set up app use express methods
const app = express();
// import cors
const cors = require('cors')

// determine what environment we're in
const environment = process.env.NODE_ENV || 'development';
// connect our knexfile to the environment
const configuration = require('./knexfile')[environment];
// connect our database and allow knex methods
const database = require('knex')(configuration);

// tell app to use cors for security
app.use(cors());
// server will parse incoming request bodies as json
app.use(express.json());
// default to port 3000, or the deployed environment if available
app.set('port', process.env.PORT || 3000);

// sets a default message at the root
app.get('/', (request, response) => {
  response.send('Welcome to Spells and Classes!');
});

// app will GET all spells at /api/v1/spells
app.get('/api/v1/spells', (request, response) => {
  // select everything from the database 'spells'
  database('spells').select()
  // return a 200 response with all the spells
  .then((spells) => {
    response.status(200).json(spells);
  })
  // return a 500 response with the error object
  .catch((error) => {
    response.status(500).json({ error })
  });
});

// app will GET all classes at /api/v1/classes
app.get('/api/v1/classes', (request, response) => {
  // select everything from database 'classes'
  database('classes').select()
  // return a 200 response with all classes
    .then((classes) => {
      response.status(200).json(classes);
    })
    // return a 500 response with the error object
    .catch((error) => {
      response.status(500).json({ error })
    });
});

// app will GET a specific spell when its id is passed
app.get('/api/v1/spells/:id', (request, response) => {
  // grab the id from the incoming url
  let { id } = request.params;
  // select database 'spells' where the id matches the incomming
  database('spells')
    .where({ id: id })
    // if there is nothing returned in the spell array
    // respond with a 404 code and error
    .then(spell => {
      if (!spell[0]) {
        response.status(404).json({ error: `No spell found with id ${id}`})
      }
      // otherwise respond with the spell that was found
      response.status(200).json(spell[0])
    })
    // catch errors with a 500 code and error object
    .catch(error => {
      response.status(500).json({ error })
    })
});

// app with GET a specific class when passed its id
app.get('/api/v1/classes/:id', (request, response) => {
  // grab the id from the incoming url
  let { id } = request.params;
  // select database 'classes' where the id matches the incomming
  database('classes')
    .where({ id: id })
    // if there is nothing returned in the characterClass array
    // respond with a 404 code and error
    .then(characterClass => {
      if (!characterClass[0]) {
        response.status(404).json({ error: `No character class found with id ${id}`})
      }
      // otherwise respond with the cound characterClass
      response.status(200).json(characterClass[0])
    })
    // whoops, server broke...  500 code plus error object
    .catch(error => {
      response.status(500).json({ error })
    })
});

// This is broken...  I'm not sure why
// Should POST new spells when sent a request body
// to /api/v1/spells endpoint
app.post('/api/v1/spells', (request, response) => {
  //grabs the new spell out of the request body
  const newSpell = request.body;
  //double checks that the incomming spell has been isolated
  console.log("spell request.body", newSpell)
  //loops through the set of required paramaters
  for (let requiredParameter of ['name', 'level', 'description', 'classes']) {
    //if the incomming spell doesn't have one of the required paramanters
    //fire off a 422 error and let the user know what parameter
    //was missing
    if (!newSpell[requiredParameter]) {
      return response.status(422).send({ error: `Unexpected Format, missing ${requiredParameter}`})
    }
  }
  //This seems to be the failure point
  //It should select the database 'spells' and insert
  //a new row with the new spell, returning the spells name
  //which I want to send back as a 201 response.
  //I get a 42703 error "undefined column"
  //maybe I set up the database incorrectly...
  database('spells').insert(newSpell, 'name')
    .then(spellName => {
      response.status(201).json({ name: spellName[0] });
    })
    //So this function allways finishes here with an error
    .catch(error => {
      response.status(500).json({ error });
    });
});

//This POST works just fine to post new classes
app.post('/api/v1/classes', (request, response) => {
  // grab the new characterClass our of the request body
  const characterClass = request.body;
  //make sure that we have the required parameter of 'name'
  for (let requiredParameter of ['name']) {
    //if name is missing, let the user know with a 422 error
    //and error message
    if (!characterClass[requiredParameter]) {
      return response.status(422).send({ error: `Unexpected Format, missing ${requiredParameter}`})
    }
  }
  //in the 'classes' database insert a new row with the
  //characterClass and return the name
  database('classes').insert(characterClass, 'name')
  //respond with a 201 code and the name
  .then(character => {
    response.status(201).json({ name: character[0] });
  })
  //if the backend breaks send a 500
  .catch(error => {
    response.status(500).json({ error });
  });
});

//DELETE a class from 'classes' when passed the name
app.delete('/api/v1/classes/:name', (request, response) => {
  //pulls the name out from the url
  const { name } = request.params;
  //selects database 'classes' where the name matches
  //the one we sent in the url
  database('classes').where({ name: name})
  //delete the class we found
  .del()
  .then(responseValue => {
    //if the responseValue was falsey we couldn't find
    //the class the user was looking for
    //let them know with a 404 code and message
    if(!responseValue) {
      return response.status(404).json(`Class ${name} not found.`)
      }
      //otherwise let them know things worked with this message
      return response.status(200).json(`Character class: ${name} DELETED`)
    })
    //if all fails, send a 500 code
    .catch(error => {response.status(500).json(error)})
});

//Change class names with this PATCH endpoint by passing an id
app.patch('/api/v1/classes/:id', (request, response) => {
  //grab the incomming id out of the url
  const { id } = request.params;
  //grab our updated name from the request body
  const { name } = request.body
  //in 'classes' database where the ids match
  database('classes')
    .where({ id: id })
    //update the name property with the new one being sent in
    .update({ name: name })
    //if there was no characterClass at that id
    //let the user know with a 404 and message
    .then(characterClass => {
      if (characterClass[0]) {
        response.status(404).json({ error: `No character class found with id ${id}`})
      }
      //otherwise successful 202 and message
      response.status(202).json({ message: 'Class renamed!'})
    });
});

//let us know when the server is fired up
app.listen(app.get('port'), () => {
  console.log(`App is running on ${app.get('port')}`)
})