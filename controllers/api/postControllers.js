const express = require("express");
const router = express.Router();
const { Post, User } = require("../../models");

router.get("/", (req, res) => {
  Post.findAll({
    include:[User]
  })
    .then(dbPost => {
      if (dbPost.length) {
        res.json(dbPost);
      } else {
        res.status(404).json({ message: "No pets found!" });
      } 
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "an error occurred", err: err });
    });
});

router.post("/", (req, res) => {
  if(!req.session.user){
    return res.status(401).send("log in first you knucklehead!")
  }
  Post.create({
    name: req.body.name,
    species: req.body.species,
    age: req.body.age,
    UserId:req.session.user.id
  })
    .then(newPet => {
      res.json(newPet);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "an error occurred", err: err });
    });
});

module.exports = router;