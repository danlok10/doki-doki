const express = require('express');
const app = express();
const path = require('path');


//settings
app.use(express.static('./frontend'));
app.set("port", process.env.PORT || 80);



//routes
app.use(require('./routes/index'))

//starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
