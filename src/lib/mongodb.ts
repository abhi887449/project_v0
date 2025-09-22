// lib/mongoose.ts
import mongoose from 'mongoose';

interface CachedConnections {
  [key: string]: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  };
}

const cached: CachedConnections = {};

async function createConnection(uri: string, dbName: string) {
  if (!cached[dbName]) {
    cached[dbName] = { conn: null, promise: null };
  }

  if (cached[dbName].conn) return cached[dbName].conn;

  if (!cached[dbName].promise) {
    // Replace database in URI dynamically
    const dbUri = uri.replace(/\/[^/?]+(\?|$)/, `/${dbName}`);
    cached[dbName].promise = mongoose.createConnection(dbUri).asPromise();
  }

  cached[dbName].conn = await cached[dbName].promise;
  return cached[dbName].conn;
}

// Export functions for each database
export async function connectDBEcommerce() {
  const MONGO_URI = process.env.MONGODB_URI!;
  const DB_ECOMMERCE = process.env.DB_ECOMMERCE!;
  return createConnection(MONGO_URI, DB_ECOMMERCE);
}

export async function connectDBEcommerceLog() {
  const MONGO_URI = process.env.MONGODB_URI!;
  const DB_ECOMMERCE_LOGS = process.env.DB_ECOMMERCE_LOGS!;
  return createConnection(MONGO_URI, DB_ECOMMERCE_LOGS);
}
