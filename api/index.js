const express = require('express');
const app = express();
const path = require('path');


//settings
app.use(express.static('./frontend'));
app.set("port", process.env.PORT || 80);



//routes
app.use(require('./routes/index'))


const PORT = process.env.PORT || 3000;
app.set('port', PORT);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
