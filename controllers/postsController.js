const postsData = require("../data/posts.js");

function index(req, res) {
    res.json(postsData);
}

function show(req, res) {
    const postFound = postsData.find(
        (post) => post.id === parseInt(req.params.id),
    );

    if (postFound) {
        res.json(postFound);
    } else {
        res.status(404).send("Errore: Post non trovato!");
    }
}

function create(req, res) {
    const newId = postsData[postsData.length - 1].id + 1;
    // Costruisco il nuovo oggetto post
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags,
    };

    postsData.push(newPost);
    // Costruisco il nuovo oggetto della risposta!?

    res.status(201).json(newPost);
}

function update(req, res) {
    const postToUpdate = postsData.find(
        (post) => id === parseInt(req.params.id),
    );

    // Aggiorno i dati
    postToUpdate.title = req.body.title;
    postToUpdate.content = req.body.content;
    postToUpdate.image = req.body.image;
    postToUpdate.tags = req.body.tags;

    // Costruisco il nuovo oggetto della risposta!?
    res.json(postToUpdate);
}

function destroy(req, res) {
    const index = postsData.findIndex(
        (post) => post.id === parseInt(req.params.id),
    );
    postsData.splice(index, 1);

    console.log("Lista aggiornata dopo l'eliminazione:", postsData);

    res.sendStatus(204);
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
