const Blog = require("../model/blog");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", {
        title: "All blogs",
        blogs: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_post = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((request) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_create = (req, res) => {
  res.render("create", {
    title: "Create",
  });
};

const blog_details = (req, res) => {
  const id = req.params.id;
  const blog = Blog.findById(id)
    .then((result) => {
      res.render("details", {
        title: "All-Blogs",
        blog: result,
      });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "Blog Not Found" });
    });
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({
        redirect: "/blogs",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  blog_create,
  blog_delete,
  blog_details,
  blog_index,
  blog_post,
};
