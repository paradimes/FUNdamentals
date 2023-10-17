const express = require("express");
const cors = require("cors");
const { User, SavedItem } = require("./user");
require("./db");

const PORT = 8081;

const app = express();

// Allow cross-origin requests (CORS)
app.use(cors());

// enable body parser to accept json data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// add router to the server and name it openai
app.use("/openai", require("./router"));

app.get("/", (req, res) => {
  res.json("Hello");
});

app.post("/api/saveResources", async (req, res) => {
  const { userEmail, resources, formattedTopic } = req.body;

  // Find the user by email
  let user = await User.findOne({ userEmail });

  // If the user doesn't exist, create a new one
  if (!user) {
    user = new User({ userEmail, topicsSaved: {} });
  }

  // Check if the topic already exists in the user's topicsSaved map
  const existingSavedItemId = user.topicsSaved.get(formattedTopic);

  if (existingSavedItemId) {
    // If the topic exists, update the SavedItem with the new resources array
    await SavedItem.findByIdAndUpdate(existingSavedItemId, { resources });
  } else {
    // If the topic doesn't exist, create a new SavedItem
    const savedItem = new SavedItem({
      topic: formattedTopic,
      resources,
    });
    await savedItem.save();

    // Add the saved item to the user's topicsSaved map
    user.topicsSaved.set(formattedTopic, savedItem._id);
  }

  // Save the user
  await user.save();

  res.send("Resources saved successfully");
});

app.get("/api/getSavedItems", async (req, res) => {
  const { userEmail } = req.query;

  const user = await User.findOne({ userEmail }).populate("topicsSaved");

  if (!user) {
    return res.status(404).send("User not found");
  }

  const savedItems = Array.from(user.topicsSaved.values());

  res.send(savedItems);
});

app.delete("/api/deleteSavedItem", async (req, res) => {
  const { savedItemId, userEmail } = req.body;

  // Find the SavedItem
  let savedItem = await SavedItem.findById(savedItemId);

  // If the SavedItem doesn't exist, send an error response
  if (!savedItem) {
    return res.status(404).json({ message: "Item not found" });
  }

  // Find the user and remove the saved item from the user's topicsSaved map
  await User.updateOne(
    { userEmail },
    { $unset: { [`topicsSaved.${savedItem.topic}`]: "" } }
  );

  // Delete the SavedItem
  await SavedItem.findByIdAndDelete(savedItemId);

  res.json({ message: "Item deleted successfully" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// export the express api
module.exports = app;
