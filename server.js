const express = require('express');
const app = express();
const cors = require('cors')

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT || 3000);

app.get('/', (request, response) => {
  response.send('Welcome to Spells and Classes!');
});

app.get('/api/v1/spells', (request, response) => {
  database('spells').select()
  .then((spells) => {
    response.status(200).json(spells);
  })
  .catch((error) => {
    response.status(500).json({ error })
  });
});

app.get('/api/v1/classes', (request, response) => {
  database('classes').select()
    .then((classes) => {
      response.status(200).json(classes);
    })
    .catch((error) => {
      response.status(500).json({ error })
    });
});

app.get('/api/v1/spells/:id', (request, response) => {
  let { id } = request.params;
  database('spells')
    .where({ id: id })
    .then(spell => {
      if (!spell[0]) {
        response.status(404).json({ error: `No spell found with id ${id}`})
      }
      response.status(200).json(spell[0])
    })
    .catch(error => {
      response.status(500).json({ error })
    })
});

app.get('/api/v1/classes/:id', (request, response) => {
  let { id } = request.params;
  database('classes')
    .where({ id: id })
    .then(characterClass => {
      if (!characterClass[0]) {
        response.status(404).json({ error: `No character class found with id ${id}`})
      }
      response.status(200).json(characterClass[0])
    })
    .catch(error => {
      response.status(500).json({ error })
    })
});

app.post('/api/v1/spells', (request, response) => {
  const newSpell = request.body;
  console.log("spell request.body", newSpell)
  for (let requiredParameter of ['name', 'level', 'description', 'classes']) {
    if (!newSpell[requiredParameter]) {
      return response.status(422).send({ error: `Unexpected Format, missing ${requiredParameter}`})
    }
  }
  database('spells').insert(newSpell, 'name')
    .then(spellName => {
      response.status(201).json({ name: spellName[0] });
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.patch('/api/v1/classes/:id', (request, response) => {
  const { id } = request.params;
  const { name } = request.body
  database('classes')
    .where({ id: id })
    .update({ name: name })
    .then(characterClass => {
      if (characterClass[0]) {
        response.status(404).json({ error: `No character class found with id ${id}`})
      }
      response.status(202).json({ message: 'Class renamed!'})
    });
});

app.post('/api/v1/classes', (request, response) => {
  const characterClass = request.body;
  for (let requiredParameter of ['name']) {
    if (!characterClass[requiredParameter]) {
      return response.status(422).send({ error: `Unexpected Format, missing ${requiredParameter}`})
    }
  }
  database('classes').insert(characterClass, 'name')
    .then(character => {
      response.status(201).json({ name: character[0] });
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.delete('/api/v1/classes/:name', (request, response) => {
  const { name } = request.params;
  database('classes').where({ name: name})
    .del()
    .then(responseValue => {
      if(!responseValue) {
        return response.status(404).json(`Class ${name} not found.`)
      }
      return response.status(200).json(`Character class: ${name} DELETED`)
    })
    .catch(err => {response.status(500).json(err)})
})

app.listen(app.get('port'), () => {
  console.log(`App is running on ${app.get('port')}`)
})