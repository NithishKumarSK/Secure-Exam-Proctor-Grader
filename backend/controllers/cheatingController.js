import CheatingLog from "../models/cheatingLogModel.js"; // Import the model

export const saveCheatingLog = async (req, res) => {
  try {
    const { noFaceCount, multipleFaceCount, cellPhoneCount, prohibitedObjectCount, examId, email, username } = req.body;

    const newLog = new CheatingLog({
      noFaceCount,
      multipleFaceCount,
      cellPhoneCount,
      prohibitedObjectCount,
      examId,
      email,
      username,
    });

    await newLog.save();
    res.status(201).json({ message: "Cheating log saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};
