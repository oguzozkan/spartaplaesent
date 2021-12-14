const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const SMTPTransport = require("nodemailer/lib/smtp-transport");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.use(express.static(path.join(__dirname, "build")));
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: "oguuzozkan@gmail.com",
    pass: "19961915",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const email = req.body.email;
  const message = "Welcome to family!";

  const mail = {
    from: "oguuzozkan@gmail.com",
    to: email,

    subject: "Contact Form Message",
    html: `<p>Email: ${email}</p> <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Succesfull sign up for our Newsletter" });
    }
  });
});
