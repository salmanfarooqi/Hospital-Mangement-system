import Learning from "../../database/learning.js";
const createLearning = async (req, res) => {
  try {
    const { status } = req.body;

    // Creating document
    const learning = await Learning.create({
      status: status, // 0 mean request / pending, 1 mean upcoming/accepted, 2 mean finished
    });

    // Send the response
    res.status(201).json({
      message: "Learning has created successfully!",
      learning: learning,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed to create Learning." });
  }
};

export default createLearning;
