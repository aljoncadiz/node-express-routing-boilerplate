const express = require('express');
const config = require('./config.json');
const app = express();
const port = config.port;

require('./routes')(app);

app.listen(port, () => {
    console.log(`app is live @ port ${port}`);
})