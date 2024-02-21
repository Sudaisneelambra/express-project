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
      res.redirect("/");
    }
  },
  postSignupController: (req, res) => {
  
    const user = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../models/person.json"))
    );
  
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
    } else {
      const newone = {
        email,
        pass,
      };
      user.push(newone);
      fs.writeFileSync(
        path.join(__dirname, "../models/person.json"),
        JSON.stringify(user)
        );
        req.session.email = email;
        res.send({ url: "home", status: true });
      }
    },
    postLogincontroller: (req, res) => {
      const user = JSON.parse(
        fs.readFileSync(path.join(__dirname, "../models/person.json"))
        );
  
      const { email, pass } = req.body;
  
      const Already = user.find((ex) => {
        return ex.email == email && ex.pass == pass;
      });
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
      } else {
        res.redirect("/login");
      }
    });
  },
};
