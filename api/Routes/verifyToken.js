const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
  const token = req.header("Authorization");
  token2 = token.split(" ")[1];
  if (!token2) return res.status(401).send("Access Denied");
  console.log("from verification : " + token2);
  try {
    jwt.verify(token2, "secret", (err, user) => {
      if (err) return res.status(403);
      req.user = user;
      next();
    });
  } catch (err) {
    res.status(400).send("Invalid token" + error);
  }
};
