// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URL);
//     console.log(`MongoDB Connected:`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

// export default connectDB;



import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL is not defined. Please check your .env file.");
    }

    console.log(`🔄 Connecting to MongoDB at: ${process.env.MONGO_URL}`);

    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Database Connection Error: ${error.message}`);

    // Optional: Retry connection after a delay
    // setTimeout(connectDB, 5000); // Uncomment to retry every 5 seconds

    process.exit(1); // Exit process if connection fails
  }
};

export default connectDB;