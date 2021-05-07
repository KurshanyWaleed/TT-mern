const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

// Import Routes
const authRouter = require("./Routes/auth");
const postsRouter = require("./Routes/posts");
const commentsRouter = require("./Routes/comments");
//const usersRouter = require("./routes/users");
//const chatRouter = require("./routes/chat");
//app.options("http://localhost:3000", cors());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));
//*mongoose.connect();
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log(" dB connected ! "));
app.use(express.json());

/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
*/
app.use(express.json());
app.use(cookieParser());

// Route Middlewares
app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);
app.use("/api/comments", commentsRouter);
//app.use("/api/users", usersRouter);
//app.use("/api/chat", chatRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `server running in this address http://localhost:${process.env.PORT} ....`
  );
});
