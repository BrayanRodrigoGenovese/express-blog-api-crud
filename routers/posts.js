const express = require("express");
const router = express.Router();

const postsData = require("../data/posts.js");

router.get("/");
router.get("/:id");
router.post("/");
router.put("/:id");
router.delete("/:id");

module.exports = router;
