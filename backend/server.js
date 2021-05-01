const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

const donorRouter = require('./routes/donor');

const seekerRouter = require('./routes/seeker');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.MONGO_DB_ATLAS_URL;

const uri = MONGO_DB_ATLAS_URL = "mongodb+srv://xyz:xyz@12345@cluster0.pe08z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" ;

mongoose.connect(uri, {useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

 app.use('/donors',donorRouter);
 app.use('/seekers', seekerRouter);

app.listen(port, ()=>{    

    console.log(`Server is running at port no. : ${port}`);
})

