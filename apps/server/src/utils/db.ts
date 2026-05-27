import mongoose from 'mongoose';

const DATABASE_URL = process.env.DATABASE_URL as string;

// Define the shape of our cached connection object
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extend the global namespace to include our custom property
declare global {
  var mongoose: MongooseCache;
}

// Initialize the cache
let cached: MongooseCache = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connect(): Promise<typeof mongoose> {
  if (cached.conn) {
    console.log('✅ Using cached database connection');
    return cached.conn;
  }

  if (!cached.promise) {
    console.log('🔌 Establishing new database connection...');
    cached.promise = mongoose.connect(DATABASE_URL, {
      bufferCommands: false,
    }).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  console.log('✅ Database connected');
  return cached.conn;
}

function isAlive(): boolean {
  return mongoose.connection.readyState === 1;
}

export { connect, isAlive };