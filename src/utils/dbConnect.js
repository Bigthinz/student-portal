import mongoose from 'mongoose';
/** 
Source : 
https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/utils/dbConnect.js 
**/

const STRING = 'mongodb://localhost:27017/assignment';
// const MONGODB_URI =
//   process.env.MONGO_URI ||
//   'mongodb+srv://dave:cainandabel4o@cluster0.yeihc.mongodb.net/kinrabb?retryWrites=true&w=majority';
const MONGODB_URI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/Assignment';

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment ');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: true,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
