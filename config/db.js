import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected Successfully!");
  } catch (error) {
    console.error(`Error in connecting Database: ${error.message}`);
    process.exit(1);
  }
};
export default connectDB;



// KbXOJZafMil2qwuJ
// mongodb+srv://pranjalbansal03_db_user:KbXOJZafMil2qwuJ@spendsmartdb.qoofjuf.mongodb.net/?retryWrites=true&w=majority&appName=spendSmartDB