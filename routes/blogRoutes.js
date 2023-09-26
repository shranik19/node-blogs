const express = require("express");
const router = express.Router();
const blogControllers = require("../controllers/blogController");

router.get("/", blogControllers.blog_index);

router.post("/", blogControllers.blog_post);

router.get("/create", blogControllers.blog_create);

router.get("/:id", blogControllers.blog_details);

router.delete("/:id", blogControllers.blog_delete);

module.exports = router;
