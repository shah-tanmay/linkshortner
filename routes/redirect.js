const express = require("express");
const router = express.Router();
const Url = require("../models/Url");

router.get("/:code", async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code }, (err, url) => {
      if (err) console.log(err);
      url.count = url.count + 1;
      url.save();
    });
    if (url) {
      console.log(url);
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json("No URL Found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
