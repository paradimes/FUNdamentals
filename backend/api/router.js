const express = require("express");
const router = express.Router();
const { generateResources } = require("./generateResources");
const { generateTOC } = require("./generateTOC");

router.options("/generateResources", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.sendStatus(200);
});
router.post("/generateResources", generateResources);

router.options("/generateTOC", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.sendStatus(200);
});
router.post("/generateTOC", generateTOC);

module.exports = router;
