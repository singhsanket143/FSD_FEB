const express = require('express');
const configs = require('./configs/serverconfig');

const app = express();

app.listen(configs.PORT, () => {
    console.log('Server started on PORT', configs.PORT);
});