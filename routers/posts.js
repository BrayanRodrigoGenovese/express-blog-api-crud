const express = require("express");
const router = express.Router();

const postsData = require("../data/posts.js");

router.get("/", (req, res) => {
  res.json(postsData);
});

router.get("/:id", (req, res) => {
  const postFound = postsData.find(
    (post) => post.id === parseInt(req.params.id),
  );

  if (postFound) {
    res.json(postFound);
  } else {
    res.status(404).send("Errore: Post non trovato!");
  }
});

router.post("/", (req, res) => {
  res.send("Creazione di un nuovo post");
});

router.put("/:id", (req, res) => {
  res.send("Modifica del post " + req.params.id);
});

router.delete("/:id", (req, res) => {
  res.send("Cancellazione del post " + req.params.id);
});

module.exports = router;
