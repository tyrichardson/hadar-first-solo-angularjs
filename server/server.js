const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})