const express = require("express");
const cors = require("cors");
const knex = require("knex");
const helmet = require("helmet");
const logger = require('morgan');


const dbConfig = require("./knexfile");
const db = knex(dbConfig.development);

const server = express();

server.use(express.json(), logger('combined'), cors(), helmet());


server.get("/", (req, res) => {
  res.send("API RUNNING...");
});

server.get("/api/notes", (req, res) => {
  db("notes")
    .then(notes => {
      res.status(200).json(notes);
    })
    .catch(err => res.status(500).json(err));
});

server.get("/api/notes/:id", (req, res) => {
  const { id } = req.params;

  db("notes")
    .where("id", "=", id)
    .then(note => {
      if (note.length > 0) {
        res.status(200).json(note);
      } else {
        res.status(401).json({
          message: "the note with the specified ID does not exist"
        });
      }
    })

    .catch(err => {
      res.status(500).json({ error: "note info could not be retrieved" });
    });
});

server.post("/api/notes", (req, res) => {

  const note = req.body;
  const { title } = req.body;
  const { textBody } = req.body;

  if (!title & !textBody) {
    res
      .status(400)
      .json({ errorMessage: "please add notes title and textBody" });
  }

  db.insert(note)
    .into("notes")
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => res.status(500).json(err));
});

server.put("/api/notes/:id", (req, res) => {
  //Grab data from body
  const {id} = req.params;
  const {title, textBody} = req.body;
  const updatedNote = {title, textBody};



  console.log(updatedNote);
  //Update  data of the body
  db('notes')
      .where({id})
          .update(updatedNote)
              .then(count => {
                  res.status(201).json(count);
          })
                      .catch(err => {
                          res.status(500).json(err);
          });

});

server.delete("/api/notes/:id", (req, res) => {

  const {id} = req.params;

  db('notes')
      .where({id})
          .delete()
             .then(count  =>
                res.status(200).json(count)
    )
                    .catch(err => {
                       console.error(`${err}: CANNOT DELETE`);
    });
}); 






const port = process.env.PORT || 3300;
//const port = 3300;
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});