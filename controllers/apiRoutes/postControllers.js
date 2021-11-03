const express = require("express");
const router = express.Router();
const { Post, User } = require("../../models");

router.get("/", (req, res) => {
  Post.findAll({
    include: [User],
  })
    .then((dbPost) => {
      if (dbPost.length) {
        res.json(dbPost);
      } else {
        res.status(404).json({ message: "No posts found!" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "an error occurred", err: err });
    });
});

router.get("/:id", (req, res) => {
  Post.findByPk(req.params.id)
    .then(singlePost => {
      if (singlePost) {
        res.json(singlePost);
      } else {
        res.status(404).json({ err: "no such post found!" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

router.post("/", (req, res) => {
  if (!req.session.user) {
    return res.status(401).send("log in first you knucklehead!");
  }
  Post.create({
    id: req.body.id,
    picture: req.body.pictures,
    caption: req.body.caption,
    UserId: req.session.user.id,
  })
    .then((newPost) => {
      res.json(newPost);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "an error occurred", err: err });
    });
});



// router.post("/", upload.single("image"), async (req, res) => {
//   try {
//     // Upload image to cloudinary
//     const result = await cloudinary.uploader.upload(req.file.path);
//     // Create new post
//     let post = new Post({
//       id: req.body.id,
//       picture: result.secure_url,
//       cloudinary_id: result.public_id,
//       UserId: req.session.user.id,
//     });
//     // Save post
//     await post.save();
//     res.json(post);
//   } catch (err) {
//     console.log(err);
//   }
// });

router.get("/", async (req, res) => {
  try {
    let post = await Post.find();
    res.json(post);
  } catch (err) {
    console.log(err);
}});

router.delete("/:id", async (req, res) => {
  try {
    // Find post by id
    let post = await Post.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(post.cloudinary_id);
    // Delete post from db
    await post.remove();
    res.json(post);
  } catch (err) {
    console.log(err);
  }});

module.exports = router;
