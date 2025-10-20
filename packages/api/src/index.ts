import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import connectDB from './config/database.js';
import errorHandler from './middleware/errorHandler.js';
import taskRoutes from './routes/taskRoutes.js';
import shipRoutes from './routes/shipRoutes.js';
import systemRoutes from './routes/systemRoutes.js';


const app = express();
const port = process.env.PORT || 3001;

// Connect to Database
connectDB();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);
app.use('/api/ship', shipRoutes);
app.use('/api/systems', systemRoutes);

// Error Handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
