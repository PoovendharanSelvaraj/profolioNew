const express = require("express");

const router = express.router();

const visit = require("../model/model");

router.route("/create").post((req, res) => {
  const email = req.body.email;
  const mobile = req.body.mobile;

  const newVisit = new visit({
    email,
    mobile
  });
  newVisit.save();
});

export { router };
