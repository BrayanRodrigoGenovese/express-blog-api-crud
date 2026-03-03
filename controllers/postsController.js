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
    res.send("Creazione di un nuovo post");
}

function update(req, res) {
    res.send("Modifica del post " + req.params.id);
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
