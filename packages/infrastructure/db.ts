import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;

if (!MONGODB_CONNECTION_STRING) {
  throw new Error('MONGODB_CONNECTION_STRING is not defined');
}

export const connect = async () => {
  await mongoose.connect(MONGODB_CONNECTION_STRING);
};
