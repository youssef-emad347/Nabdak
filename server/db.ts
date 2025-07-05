import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/nabdak");
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;