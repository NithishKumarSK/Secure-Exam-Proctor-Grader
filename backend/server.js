// import express from "express";
// import dotenv from "dotenv";
// import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
// import connectDB from "./config/db.js";
// import cookieParser from "cookie-parser";
// import examRoutes from "./routes/examRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// dotenv.config();
// connectDB();
// const app = express();
// const port = process.env.PORT || 5000;

// // to parse req boy
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // Routes
// app.use("/api/users", userRoutes);
// app.use("/api/users", examRoutes);

// // we we are deploying this in production
// // make frontend build then
// if (process.env.NODE_ENV === "production") {
//   const __dirname = path.resolve();
//   // we making front build folder static to serve from this app
//   app.use(express.static(path.join(__dirname, "/frontend/dist")));

//   // if we get an routes that are not define by us we show then index html file
//   // every enpoint that is not api/users go to this index file
//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("<h1>server is running </h1>");
//   });
// }

// // Custom Middlewares
// app.use(notFound);
// app.use(errorHandler);

// // Server
// app.listen(port, () => {
//   console.log(`server is running on http://localhost:${port}`);
// });

// // Todos:
// // -**POST /api/users**- Register a users
// // -**POST /api/users/auth**- Authenticate a user and get token
// // -**POST /api/users/logout**- logou user and clear cookie
// // -**GET /api/users/profile**- Get user Profile
// // -**PUT /api/users/profile**- Update user Profile






// import path, { dirname } from "path";
// import express from "express";
// import dotenv from "dotenv";
// import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
// import connectDB from "./config/db.js";
// import cookieParser from "cookie-parser";
// import examRoutes from "./routes/examRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import teacherRoutes from "./routes/teacherRoutes.js";
// import favicon from "serve-favicon";
// import cheatingLogsRoutes from "./routes/cheatingLogs.js";
// import cors from "cors";
// import { fileURLToPath } from "url";

// // Fix __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // Load .env file
// dotenv.config({ path: path.resolve(__dirname, ".env") });

// console.log("MONGO_URL:", process.env.MONGO_URL); // Debugging log

// // Connect to database
// connectDB();

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(cors());

// // Serve favicon
// app.use(favicon(path.join(__dirname, "..", "frontend", "public", "favicon.ico")));

// // Routes
// app.use("/api/users", userRoutes);
// app.use("/api/exams", examRoutes);
// app.use("/api/teachers", teacherRoutes);
// app.use("/api/cheatingLogs", cheatingLogsRoutes);

// // Production setup: Serve frontend build
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   // Serve index.html for any unknown route
//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("<h1>Server is running</h1>");
//   });
// }

// // Custom Middlewares
// app.use(notFound);
// app.use(errorHandler);

// // Server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });





// import path, { dirname } from "path";
// import express from "express";
// import dotenv from "dotenv";
// import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
// import connectDB from "./config/db.js";
// import cookieParser from "cookie-parser";
// import examRoutes from "./routes/examRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import teacherRoutes from "./routes/teacherRoutes.js";
// import favicon from "serve-favicon";
// import cheatingLogsRoutes from "./routes/cheatingLogs.js";
// import cors from "cors";
// import { fileURLToPath } from "url";

// // Fix __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // Load .env file
// dotenv.config({ path: path.resolve(__dirname, ".env") });

// console.log("MONGO_URL:", process.env.MONGO_URL); // Debugging log

// // Connect to database
// connectDB();

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(cors());

// // Serve favicon
// app.use(favicon(path.join(__dirname, "..", "frontend", "public", "favicon.ico")));

// // Routes
// app.use("/api/users", userRoutes);
// app.use("/api/exams", examRoutes);
// app.use("/api/teachers", teacherRoutes);
// app.use("/api/users/cheatingLogs", cheatingLogsRoutes); // FIXED: Matches frontend request

// // Production setup: Serve frontend build
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));

//   // Serve index.html for any unknown route
//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("<h1>Server is running</h1>");
//   });
// }

// // Custom Middlewares
// app.use(notFound);
// app.use(errorHandler);

// // Server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });





import path, { dirname } from "path";
import express from "express";
import dotenv from "dotenv";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import examRoutes from "./routes/examRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import favicon from "serve-favicon";
import cheatingLogsRoutes from "./routes/cheatingLogs.js";
import cors from "cors";
import { fileURLToPath } from "url";

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// Load .env file
dotenv.config({ path: path.resolve(__dirname, ".env") });

console.log("MONGO_URL:", process.env.MONGO_URL); // Debugging log

// Connect to database
connectDB();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Serve favicon
app.use(favicon(path.join(__dirname, "..", "frontend", "public", "favicon.ico")));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/exams", examRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/cheatingLogs", cheatingLogsRoutes); // ✅ Fixed API route

// Production setup: Serve frontend build
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // Serve index.html for any unknown route
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("<h1>Server is running</h1>");
  });
}

// Custom Middlewares
app.use(notFound);
app.use(errorHandler);

// Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
