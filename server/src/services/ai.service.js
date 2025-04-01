const { GoogleGenerativeAI } = require("@google/generative-ai");
const prompt = require("../utils/prompt.js");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
	model: "gemini-2.0-flash",
	systemInstruction: prompt
});

async function generateContent(prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = generateContent;