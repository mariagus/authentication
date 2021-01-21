const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((User) => res.json(User))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.userName;
  const location = req.body.location;

  const newUser = new User({
    username,
    location,
  });
  newUser
    .save()
    .then(() => res.json(newUser))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
