const router = require("express").Router();
const verify = require("./verifyToken");
const jwt = require("jsonwebtoken");
const Post = require("../Models/Post");
const Comment = require("../Models/Comment");
const User = require("../Models/User");

//  ! Creates new comment by postID another way to handle token's user

router.post("/create/:postID", async (req, res) => {
  const token = req.header("Authorization");
  token2 = token.split(" ")[1];
  const user = jwt.decode(token2);
  //const user = req.user;

  const comment = new Comment({
    userID: user._id,
    postID: req.params.postID,
    content: req.body.content,
  });
  try {
    const savedComment = await comment.save();
    try {
      await Post.findById(req.params.postID).updateOne({
        $push: { comments: savedComment._id },
      });
      res.json({
        status: "success",
      });
    } catch (err) {
      res.status(400).send({ err: err });
    }
  } catch (err) {
    res.status(400).send({ err: err });
  }
});

module.exports = router;
