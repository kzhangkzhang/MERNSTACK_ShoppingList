const express       = require('express');
const mongoose      = require('mongoose');
const bodyParser    = require('body-parser');
const items         = require('./routes/api/items');

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// MongoDB Config
const db = require('./config/keys').mongoURI;

// connect to MongoDB (MLab cloud)
mongoose
    .connect(db)
    .then(() => console.log('MongoDB is conncted successfully +++'))
    .catch(err => console.log('MongoDB connect failed with error *** :  ', err));


// Use Routes
app.use('/api/items', items);

// server configuration
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));