const postsData = require("../data/posts.js");

function index(req, res) {
    let posts = [...postsData];
    const tagFilter = req.query.tag;
    if (tagFilter) {
        const normalizedFilter = tagFilter.toLowerCase().trim();
        posts = posts.filter((post) => {
            return post.tags.some(
                (tag) => tag.toLowerCase().trim() === normalizedFilter,
            );
        });
    }

    res.json(posts);
}

function show(req, res) {
    const postFound = postsData.find(
        (post) => post.id === parseInt(req.params.id),
    );

    if (!postFound) {
        return res.status(404)({
            succes: false,
            message: `Post con id ${postID} non trovato`,
        });
    }

    res.json(postFound);
}

function create(req, res) {
    let maxId = 0;
    postsData.forEach((post) => {
        if (post.id > maxId) maxId = post.id;
    });
    const newId = maxId + 1;
    // Costruisco il nuovo oggetto post
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags || [],
    };

    postsData.push(newPost);
    // Costruisco il nuovo oggetto della risposta!?

    res.status(201).json(newPost);
}

function update(req, res) {
    const postToUpdate = postsData.find(
        (post) => id === parseInt(req.params.id),
    );

    if (!postToUpdate) {
        return res.status(404).json({
            success: false,
            message: `Impossibile modificare: Post con id ${postId} non trovato`,
        });
    }

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

    if (postIndex === -1) {
        return res.status(404).json({
            success: false,
            message: `Impossibile eliminare: Post con id ${postId} non trovato`,
        });
    }
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
