import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

const initServer = async (): Promise<void> => {
  try {
    if (DB_URI) {
      await mongoose.connect(DB_URI);
      console.log('✅ MongoDB connected');
    } else {
      console.warn('⚠️  No DB_URI provided. Starting without DB.');
    }

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Startup error:', err);
    process.exit(1);
  }
};

initServer();
