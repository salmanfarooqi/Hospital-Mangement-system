import Learning from "../../database/learning.js";

const changeLearning = async (req, res) => {
  try {
    const { Id, changeStatus } = req.body;

    const learningDoc = await Learning.updateOne(
      { _id: Id },
      { $set: { status: changeStatus } }
    );

    // Send the response
    res.status(201).json({
      message: "Learning changed successfully!",
      learningDoc,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to change Learning." });
  }
};

export default changeLearning;
