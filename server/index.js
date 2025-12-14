import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import cron from 'node-cron';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import newsRoutes from './routes/newsRoutes.js';
import updateNews from './jobs/newsUpdater.js';

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Configurar CORS para permitir credenciales (cookies)
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Schedule News Updates (8am, 2pm, 8pm)
cron.schedule('0 8,14,20 * * *', async () => {
    console.log('⏰ Running scheduled news update...');
    await updateNews();
});

// Run update on startup (for demo purposes) if in dev mode
if (process.env.NODE_ENV === 'development') {
    console.log('🚀 Dev mode: Running initial news update...');
    // updateNews(); // Uncomment to run immediately on start
}

// Error Handling Middleware
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
