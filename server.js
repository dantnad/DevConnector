//1.- Initialize express
const express = require('express');
const app = express();
//2.- Connects to the DB module created at /config/db (Go to Config folder)
const connectDB = require('./config/db');

// 11.- Connect to Database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// 12.- Define Routes (Go to routes/api)
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`)});
