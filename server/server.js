// index.js (ES Module version)
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { transportmail } from './routes/mail.js';

dotenv.config();  // Load environment variables from .env file
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());
const allowedOrigins = "http://localhost:5173";
app.use(cors({
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// Sample route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Mail route
app.get('/mail', transportmail);

// API route example
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// POST route to handle data
app.post('/api/data', (req, res) => {
  const { name, age } = req.body;
  if (name && age) {
    res.status(201).json({ message: `Data received: ${name}, ${age}` });
  } else {
    res.status(400).json({ error: 'Name and age are required' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
