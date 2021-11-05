const express = require("express");
const router = express.Router();
const { Post, User, Group } = require("../../models");

//get all post from group
router.get("/", (req, res) => {
  Group.findAll({
    include: [Post],
  })
    .then((dbGroupPost) => {
      if (dbGroupPost.length) {
        res.json(dbGroupPost);
      } else {
        res.status(404).json({ message: "No Group found!" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "an error occurred", err: err });
    });
});

router.get("/", (req, res) => {
  User.findAll()
    .then((usersInGroup) => {
      if (usersInGroup.length) {
        res.json(usersInGroup);
      } else {
        res.status(404).json({ message: "No Users found!" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "an error occurred", err: err });
    });
});

router.post("/", (req, res) => {
  console.log(req.session);
  Group.create({
    name: req.body.name,
    UserId: req.session.user.id,
  })
  .then((newGroup) => {
    res.json(newGroup);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "an error occurred", err: err });
    });
});

router.delete("/:id", (req, res) => {
  if (!req.session.user) {
    return res.status(403).json({ err: "login first" });
  }
  Group.findByPk(req.params.id).then(foundGroup => {
    if (req.session.user.id !== foundGroup.UserId) {
      return res.status(403).json({ err: "not your group!" });
    }
    Group.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(delGroup => {
        if (delGroup) {
          res.json(delGroup);
        } else {
          res.status(404).json({ err: "no such group found!" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err });
      });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });;
});

// router.delete("/:id", async (req, res) => {
//   try {
//     // Find post by id
//     let group = await Group.findById(req.params.id);
//     // Delete image from cloudinary
//     await cloudinary.uploader.destroy(group.cloudinary_id);
//     // Delete group from db
//     await group.remove();
//     res.json(group);
//   } catch (err) {
//     console.log(err);
//   }
// });

module.exports = router;