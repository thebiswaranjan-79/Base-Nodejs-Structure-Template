const express = require("express");
// const v1Router = require("./v1/index");

const router = express.Router();

router.get("/info", (req, res) => {
  return res.json({ msg: "OK" });
});

module.exports = router;
