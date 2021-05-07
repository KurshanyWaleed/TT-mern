const router = require("express").Router();
const User = require("../Models/User");
require("dotenv").config();
const { signInErrors } = require("../outil/validation.js");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
  // Validate the data
  console.log(req.body);
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  // Check if the user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res.status(400).send({ error: "Email already exists" });

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
    imgUrl: req.body.imgUrl,
    typeOfUser: req.body.typeOfUser,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: savedUser._id });
  } catch (err) {
    res.status(400).send({ err: err });
  }
});

//  * Login
router.post("/login", async (req, res) => {
  // Validate the data
  const { error } = loginValidation(req.body);
  if (error) return res.status(200).json({ error: error.details[0].message });

  // Check if the email does not exists
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(200).json({ error: { email: "Email is not found" } });

  // Check if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass)
    return res.status(200).json({ error: { password: "Password Invalid" } });

  // Create and assign a token
  const token = jwt.sign({ _id: user._id }, "SECRET"); // TOKEN SECRET
  res.cookie("jwt", token);
  res.send({ success: "true", token: token });
});

module.exports = router;
