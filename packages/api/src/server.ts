import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const port = process.env.PORT || 4000;

mongoose
  .connect(process.env.AZURE_STORAGE_CONNECTION_STRING as string)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
