// import express from 'express';
// //import { logCheating } from "../controllers/cheatingLogsController.js"; 
// const router = express.Router();

// router.post('/cheatingLogs', (req, res) => {
//     res.status(201).json({ message: 'Cheating log saved successfully!' });
// });

// export default router; // ✅ Correct! Uses default export




// import express from 'express';
// const router = express.Router();

// // Mock database (Replace this with a real database query)
// const cheatingLogs = [
//     { id: "88dd3c83-036f-4269-8e1f-0a55c8bb7d0b", userId: "123", reason: "Switched tabs multiple times" }
// ];

// // ✅ GET - Fetch all cheating logs
// router.get('/users/cheatingLogs', (req, res) => {
//     res.json(cheatingLogs);
// });

// // ✅ GET - Fetch a specific cheating log by ID
// router.get('/users/cheatingLogs/:id', (req, res) => {
//     const log = cheatingLogs.find(log => log.id === req.params.id);
//     if (!log) {
//         return res.status(404).json({ message: "Cheating log not found" });
//     }
//     res.json(log);
// });

// export default router;




import express from "express";
import CheatingLog from "../models/cheatingLogModel.js"; // Import the Mongoose model

const router = express.Router();

// ✅ GET - Fetch all cheating logs
router.get("/cheatingLogs/:id", async (req, res) => {
    try {
        const logs = await CheatingLog.find({});
        res.json(logs);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

// ✅ GET - Fetch a specific cheating log by exam ID
router.get("/:examId", async (req, res) => {
    try {
        const logs = await CheatingLog.find({ examId: req.params.examId });
        if (!logs.length) {
            return res.status(404).json({ message: "No cheating logs found for this exam" });
        }
        res.json(logs);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

// ✅ POST - Save a new cheating log entry
router.post("/", async (req, res) => {
    const { noFaceCount, multipleFaceCount, cellPhoneCount, prohibitedObjectCount, examId, username, email } = req.body;

    try {
        const newLog = new CheatingLog({
            noFaceCount,
            multipleFaceCount,
            cellPhoneCount,
            prohibitedObjectCount,
            examId,
            username,
            email,
        });

        const savedLog = await newLog.save();
        res.status(201).json(savedLog);
    } catch (error) {
        res.status(500).json({ message: "Error saving cheating log" });
    }
});

export default router;
