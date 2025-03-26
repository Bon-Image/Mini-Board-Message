import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Fix __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize app
const app = express();

// ===== Middleware =====
app.use(express.json()); // For JSON requests
app.use(express.urlencoded({ extended: true })); // For form submissions

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// ===== View Engine Setup (Optional) =====
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Or pug, hbs, etc.

// ===== Routes (Add your routers here) =====
// Example:
// import indexRouter from './routes/indexRouter.js';
// app.use('/', indexRouter);

// ===== Start Server =====
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`My App is listening on http://localhost:${PORT}`);
});