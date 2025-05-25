// import express from "express";
// import {
//   authUser,
//   getUserProfile,
//   logoutUser,
//   registerUser,
//   updateUserProfile,
// } from "../controllers/userController.js";
// import { protect } from "../middleware/authMiddleware.js";
// import { createExam, getExams } from "../controllers/examController.js";
// const userRoutes = express.Router();
// userRoutes.post("/", registerUser);
// userRoutes.post("/auth", authUser);
// userRoutes.post("/logout", logoutUser);
// userRoutes.post("/register", registerUser);
// // protecting profile route using auth middleware protect
// userRoutes
//   .route("/profile")
//   .get(protect, getUserProfile)
//   .put(protect, updateUserProfile);

// export default userRoutes;



import express from "express";
import { saveCheatingLog } from "../controllers/cheatingController.js";
//import { logCheating } from "../controllers/cheatingController.js";
import {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import { createExam, getExams } from "../controllers/examController.js";
const userRoutes = express.Router();
const router = express.Router();
userRoutes.post("/", registerUser);
userRoutes.post("/auth", authUser);
userRoutes.post("/logout", logoutUser);
userRoutes.post("/register", registerUser);
//router.post("/cheatingLogs", someControllerFunction);
router.post("/cheatingLogs", saveCheatingLog);
//router.post("/cheatingLogs", logCheating);

// protecting profile route using auth middleware protect
userRoutes
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default userRoutes;

