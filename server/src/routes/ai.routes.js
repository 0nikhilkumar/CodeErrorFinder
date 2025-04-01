const express = require("express");
const router = express.Router();
const aiController = require("../controllers/ai.controller.js");

router.route("/get-review").post(aiController.getAiReview);

module.exports = router;