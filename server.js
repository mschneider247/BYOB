const express = require('express');
const app = express();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000);

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
      response.status(500).json({
        error
      })
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

app.listen(app.get('port'), () => {
  console.log(`App is running on ${app.get('port')}`)
})