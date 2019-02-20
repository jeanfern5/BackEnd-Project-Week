const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');

const noteRoutes = require('./routes/noteRoutes');

const port = 3300;
const server = express();

server.use(cors());
server.use(express.json());
server.use(helmet());
server.use(logger('combined'));

server.use('/api/notes', noteRoutes); 

server.listen(port, () => {
    console.log(`\n===== RUNNING ON PORT ${port} =====\n`);
});
