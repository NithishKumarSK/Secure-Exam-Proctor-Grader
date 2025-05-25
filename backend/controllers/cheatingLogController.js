// import asyncHandler from "express-async-handler";
// import CheatingLog from "../models/cheatingLogModel.js";

// // @desc Save cheating log data
// // @route POST /api/cheatingLogs
// // @access Private
// const saveCheatingLog = asyncHandler(async (req, res) => {
//   const {
//     noFaceCount,
//     multipleFaceCount,
//     cellPhoneCount,
//     prohibitedObjectCount,
//     examId,
//     username,
//     email,
//   } = req.body;

//   const cheatingLog = new CheatingLog({
//     noFaceCount,
//     multipleFaceCount,
//     cellPhoneCount,
//     prohibitedObjectCount,
//     examId,
//     username,
//     email,
//   });

//   const savedLog = await cheatingLog.save();

//   if (savedLog) {
//     res.status(201).json(savedLog);
//   } else {
//     res.status(400);
//     throw new Error("Invalid Cheating Log Data");
//   }
// });

// // @desc Get all cheating log data for a specific exam
// // @route GET /api/cheatingLogs/:examId
// // @access Private
// const getCheatingLogsByExamId = asyncHandler(async (req, res) => {
//   const examId = req.params.examId;
//   const cheatingLogs = await CheatingLog.find({ examId });

//   res.status(200).json(cheatingLogs);
// });

// export { saveCheatingLog, getCheatingLogsByExamId };




import CheatingLog from "../models/cheatingLogModel.js";

// @desc Save cheating log data
// @route POST /api/cheatingLogs
// @access Private
const saveCheatingLog = async (req, res) => {
  try {
    const {
      noFaceCount,
      multipleFaceCount,
      cellPhoneCount,
      prohibitedObjectCount, // Ensure this matches frontend variable name
      examId,
      username,
      email,
    } = req.body;

    if (!examId) {
      return res.status(400).json({ message: "Exam ID is required" });
    }

    const cheatingLog = new CheatingLog({
      noFaceCount,
      multipleFaceCount,
      cellPhoneCount,
      prohibitedObjectCount,
      examId,
      username,
      email,
    });

    const savedLog = await cheatingLog.save();
    res.status(201).json({ message: "Cheating log saved", log: savedLog });
  } catch (error) {
    console.error("Error saving cheating log:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// @desc Get all cheating log data for a specific exam
// @route GET /api/cheatingLogs/:examId
// @access Private
const getCheatingLogsByExamId = async (req, res) => {
  try {
    const { examId } = req.params;

    if (!examId) {
      return res.status(400).json({ message: "Exam ID is required" });
    }

    const cheatingLogs = await CheatingLog.find({ examId });

    if (!cheatingLogs.length) {
      return res.status(404).json({ message: "No cheating logs found" });
    }

    res.status(200).json(cheatingLogs);
  } catch (error) {
    console.error("Error fetching cheating logs:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { saveCheatingLog, getCheatingLogsByExamId };
