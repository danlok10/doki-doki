const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();

// Settings
const PORT = process.env.PORT || 3000;
app.set('port', PORT);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'frontend')));

// Routes
app.use('/', indexRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
