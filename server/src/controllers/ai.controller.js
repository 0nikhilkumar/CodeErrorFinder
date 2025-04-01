const aiService = require("../services/ai.service.js");

module.exports.getAiReview = async (req, res) => {
    const code = req.body.code;

    if(!code) {
        res.status(400).send("code is required");
    }

    const response = await aiService(code);

    res.send(response);
}