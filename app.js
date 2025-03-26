import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { body, validationResult } from 'express-validator';
import indexRouter from './routes/indexRouter.js';
import newMessagesRouter from './routes/newMessageRouter.js'; 

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

// ===== Routes =====

app.use('/', indexRouter); 
app.use('/new', newMessagesRouter); 


// ===== Start Server =====
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`My App is listening on http://localhost:${PORT}`);
});