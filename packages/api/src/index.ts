import express from 'express';
import cors from 'cors';
import path from 'path';
import rateLimit from 'express-rate-limit';
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

// Serve static files
app.use(express.static(path.join(__dirname, '../../client/dist')));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
});

app.get(/^\/(?!api).*/, limiter, (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/dist", "index.html"));
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
