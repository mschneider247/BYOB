# Spells and Classes API
## by: Michael Schneider
[Michael Schneider](https://github.com/mschneider247)
<br>
[Project Board](https://github.com/mschneider247/BYOB/projects/1)

### Summary:
[live site](https://spells-classes-api.herokuapp.com/).
An API for keeping track of spells!  Each spell has a name, description, level and the classes that can cast the spell. Classes are tracked as footnotes and come with the spell_id they are linked to. Developers have the ability to add spells, add/delete/rename classes, and search all spells/classes and individual spells/classes.

### Tech Stack:
This application utilizes: Knex, Express, Nodemon, PSQL, Postico and JavaScript for implementation 

### Use of this api
 Developers can access 6 different endpoints within the API

<details>

  <summary><code>GET </code>all spells</summary>
  example request : `GET` `/api/v1/spells`
  <br>
  example response: 

  ```javascript

  [
    {
        "id": 174,
        "name": "Conjure Snacks",
        "level": 3,
        "description": "Create 45 pounds worth of snacks, delicious, but not very nutritious",
        "created_at": "2019-11-21T20:41:25.054Z",
        "updated_at": "2019-11-21T20:41:25.054Z"
    },
    {
        "id": 182,
        "name": "Emergency Command Hologram",
        "level": 6,
        "description": "Conjure a holographic Doctor that can dispence advice and medical care for 30 minutes",
        "created_at": "2019-11-21T20:41:25.061Z",
        "updated_at": "2019-11-21T20:41:25.061Z"
    }...
  ]

  ```

</details>

---

<details>
  <summary><code>GET </code>all classes</summary>
  example request : `GET` `/api/v1/classes`\
  <br>
  example response: 

  ```javascript

[
    {
        "id": 1,
        "name": "Wizard",
        "spell_id": 159,
        "created_at": "2019-11-21T20:41:25.065Z",
        "updated_at": "2019-11-21T20:41:25.065Z"
    },
    {
        "id": 2,
        "name": "Druid",
        "spell_id": 161,
        "created_at": "2019-11-21T20:41:25.066Z",
        "updated_at": "2019-11-21T20:41:25.066Z"
    },
    {
        "id": 3,
        "name": "Ranger",
        "spell_id": 161,
        "created_at": "2019-11-21T20:41:25.067Z",
        "updated_at": "2019-11-21T20:41:25.067Z"
    }...
  ]

  ```

</details>

---

<details>
  <summary><code>GET</code> a specific spell by appending the spell id</summary>
  example request : `GET` `/api/v1/spells/164`
  <br>
  example response: 

  ```javascript

{
    "id": 164,
    "name": "Touch of the Grave",
    "level": 0,
    "description": "A disembodied skeletal hand appears in mid air and smacks the target",
    "created_at": "2019-11-21T20:41:25.044Z",
    "updated_at": "2019-11-21T20:41:25.044Z"
}
  ```
</details>

---

<details>
  <summary><code>GET</code> a specific class by appending the class id</summary>
  example request : `GET` `/api/v1/classes/11`
  <br>
  example response: 

  ```javascript

{
    "id": 11,
    "name": "Warlock",
    "spell_id": 164,
    "created_at": "2019-11-21T20:41:25.071Z",
    "updated_at": "2019-11-21T20:41:25.071Z"
}

  ```

</details>

---

<details>
  <summary><code>POST</code> a new spell to the database</summary>
  example request : `POST` `/api/v1/spells`
  <br>
  body.json()

  ```javascript

{
	"name": "Post spell to API",
	"level": 2,
	"description": "Allow Front End Developer to post a new spell to the database",
	"classes": ["Wizard", "Developer", "Engineer"]
}

  ```

  example response: 

  ```javascript

{
  "name": "Post spell to API"
}

  ```

</details>

---

<details>
  <summary><code>POST</code> a new character class to the database</summary>
  example request : `POST` `/api/v1/classes`
  <br>
  body.json()

  ```javascript

{
	"name": "Archeologist"
}

  ```

  example response: 

  ```javascript

{
  "name": "Archeologist"
}

  ```

</details>

---

<details>
  <summary><code>DELETE</code> a character class by appending thier name</summary>
  
  example request : `DELETE` `/api/v1/classes/Bank Teller`
  <br>
  example response: 

  ```javascript

"Character class: Bank Teller DELETED"

  ```

</details>

---

<details>
  <summary><code>PATCH</code> a character class name by selecting their id</summary>
  
  example request : `PATCH` `/api/v1/classes/75`
  body.json()

  ```javascript

{
	"name": "Nerf Herder"
}

  ```

  <br>
  example response: 

  ```javascript

{
    "message": "Class renamed!"
}

  ```

</details>
