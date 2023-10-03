import Learning from "../../database/learning.js";
const getLearnings = async (req, res) => {
  try {
    // Creating document
    const learning = await Learning.find({});

    // Send the response
    res.status(201).json(learning);
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to find Learning." });
  }
};

export default getLearnings;
