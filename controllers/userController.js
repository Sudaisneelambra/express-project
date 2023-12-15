const fs = require("fs");
const path = require("path");

module.exports = {
  getSignupController: (req, res) => {
    if (req.session.email) {
      res.redirect("/home");
    } else {
      res.render("index", { error: "" });
    }
  },
  getLoginController: (req, res) => {
    if (req.session.email) {
      res.redirect("/home");
    } else {
      res.render("login");
    }
  },
  getHomeController: (req, res) => {
    if (req.session.email) {
      res.render("home");
    } else {
      // res.status(403).send('Error: You do not have permission to access the home page with out login.'); // Custom error message
      res.redirect("/");
    }
  },
  postSignupController: (req, res) => {
    console.log(__dirname);
  
    const user = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../models/person.json"))
    );
    console.log(user);
  
    const { email, pass } = req.body;
    const Already = user.find((ex) => {
      return ex.email == email;
    });
  
    if (Already) {
      // res.send({url: "login", status: true})
  
      res.send({
        url: "index",
        message: "User already exists ,please login",
        status: false,
      });
      console.log(user);
      console.log("mangathalayan");
    } else {
      const newone = {
        email,
        pass,
      };
      user.push(newone);
      
      console.log(user);
      fs.writeFileSync(
        path.join(__dirname, "../models/person.json"),
        JSON.stringify(user)
        );
        req.session.email = email;
        res.send({ url: "home", status: true });
        console.log("chinnadan");
      }
    },
    postLogincontroller: (req, res) => {
      const user = JSON.parse(
        fs.readFileSync(path.join(__dirname, "../models/person.json"))
        );
      console.log(user);
      console.log(req.body);
  
      const { email, pass } = req.body;
      console.log(email);
      console.log(pass);
  
      const Already = user.find((ex) => {
        return ex.email == email && ex.pass == pass;
      });
  
      console.log("fchgd" + Already);
      if (Already) {
        req.session.email = email;
        res.send({ url: "home", status: true });
      } else {
        res.send({
          url: "login",
          message: "user not found plase sign up",
          status: false,
        });
      }
    },
  getLogoutController: (req, res) => {
    req.session.destroy((error) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/login");
      }
    });
  },
};
