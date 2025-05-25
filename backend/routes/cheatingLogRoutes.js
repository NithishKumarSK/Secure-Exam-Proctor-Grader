import express from "express";
import { saveCheatingLog, getCheatingLogsByExamId } from "../controllers/cheatingLogController.js";

const router = express.Router();

router.post("/", saveCheatingLog);
router.get("/:examId", getCheatingLogsByExamId);
// router.get('/api/cheatingLogs/', getCheatingLogs);
router.get('/:examId', getCheatingLogsByExamId);


export default router;