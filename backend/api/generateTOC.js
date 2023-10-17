const OpenAI = require("openai");
require("dotenv").config();
const { topicPrompt } = require("./prompt2.json");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateTOC = async (req, res) => {
  const { topic } = req.body;

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `${topicPrompt}${topic}` }],
      // max_tokens: 2048,
      temperature: 0.2,
      // n: 1,
    });
    const response = chatCompletion.choices[0].message.content;
    // console.log("backendResponse = ", response);

    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.log(error);
    if (error.response && error.response.status === 401) {
      return res.status(401).json({
        error: "Please provide a valid API key.",
      });
    }
    return res.status(500).json({
      error:
        "An error occurred while generating the resource list. Please try again later.",
    });
  }
};

module.exports = { generateTOC };
