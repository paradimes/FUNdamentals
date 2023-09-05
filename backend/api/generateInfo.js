const OpenAI = require("openai");
const { topicPrompt } = require("./prompt.json");

const openai = new OpenAI({
  //   apiKey: process.env.OPENAI_API_KEY,
  apiKey: "apiKey", // This is also the default, can be omitted
});

const generateInfo = async (req, res) => {
  const { topic } = req.body;

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `${topicPrompt}${topic}` }],
      max_tokens: 1000,
      temperature: 0.2,
      n: 1,
    });
    const response = chatCompletion.choices[0].message.content;

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

module.exports = { generateInfo };
