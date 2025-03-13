import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Ensure environment variables are loaded

const MONGO_URI = process.env.MONGO_URI;

// Debugging: Print MongoDB URI (partially) to check if it's loaded
console.log("🔍 MongoDB URI (partial):", MONGO_URI ? MONGO_URI.substring(0, 20) + "..." : "NOT FOUND");

if (!MONGO_URI) {
  throw new Error('❌ MongoDB URI is missing in environment variables');
}

const connectDb = async () => {
  if (mongoose.connection.readyState) {
    console.log('✅ MongoDB is already connected');
    return;
  }

  try {
    console.log('⏳ Connecting to MongoDB...');

    await mongoose.connect(MONGO_URI, {
      maxPoolSize: 20,             // Optimized pool size
      socketTimeoutMS: 45000,      // Timeout settings
      serverSelectionTimeoutMS: 5000,
      tls: true,                   // Ensure secure connection
    });

    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    throw new Error('MongoDB connection failed');
  }
};

export default connectDb;
