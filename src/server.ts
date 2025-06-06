import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables before other imports that depend on them

import app from './app';
import config from '@/config/database';

// Server configuration
const PORT: number = Number(process.env.PORT) || 3000;
const DB_INIT: boolean = process.env.DB_INIT === 'true'; // Control DB init via env
const NODE_ENV: string = (process.env.NODE_ENV ?? 'development').toLowerCase();

// Select DB config for current environment
const db = config.database[NODE_ENV];
if (!db) throw new Error(`No DB config found for environment "${NODE_ENV}"`);

// MongoDB connection URI (SRV format)
const uri = `mongodb+srv://${db.userName}:${db.password}@${db.host}/${db.name}`;
// Alternate format with connection options (use if SRV issues arise)
// const uri = `mongodb+srv://${db.userName}:${db.password}@${db.host}/?retryWrites=true&w=majority&appName=${db.name}`;

/**
 * Initialize database connection and start Express server.
 */
const initServer = async (): Promise<void> => {
  try {
    if (DB_INIT) {
      // Connect to MongoDB using Mongoose
      await mongoose.connect(uri);
      console.log('✅ MongoDB connected');
    } else {
      console.warn('⚠️ Skipping DB init (DB_INIT is false)');
    }

    // Start the server
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    // Log and exit on fatal startup errors
    console.error('❌ Startup error:', err);
    process.exit(1);
  }
};

initServer();
