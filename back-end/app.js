require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserRouter = require("./app/Routes/Userrouter");
const PostRouter = require("./app/Routes/PostRouter");
const OtherRouters = require("./app/Routes/OtherRouters");
const nodemailer = require("nodemailer");
const {
  errorHandler,
  notFound,
} = require("./app/middleware/error/ErrorHandling");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cors
app.use(cors());

//ContactForm

const contactEmail = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});
app.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "***************@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res?.json({ status: "ERROR" });
    } else {
      res?.json({ status: "Message Sent" });
    }
  });
});
//user Router
app.use("/api/users", UserRouter);

//post Router
app.use("/api/posts", PostRouter);

//other Router
app.use("/api", OtherRouters);

//Err Handler
app.use(errorHandler);
app.use(notFound);
//Server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(5000, () => {
      console.log("Connected to PORT 5000");
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
