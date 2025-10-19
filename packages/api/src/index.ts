import express from 'express';
import cors from 'cors';
import { connectDB } from './config/database';
import taskRoutes from './routes/taskRoutes';
import shipRoutes from './routes/shipRoutes';
import systemRoutes from './routes/systemRoutes';


const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use('/api/tasks', taskRoutes);
app.use('/api/ship', shipRoutes);
app.use('/api/systems', systemRoutes);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
