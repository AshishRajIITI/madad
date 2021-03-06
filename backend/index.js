const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

require("dotenv").config();

const donorRouter = require("./routes/donor");
const seekerRouter = require("./routes/seeker");
const userRouter = require("./routes/user");


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const uri = process.env.MONGO_DB_ATLAS_URL;

mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

const connection = mongoose.connection;

connection.once("open", () => {
	console.log("MongoDB database connection established successfully");
});

app.use("/donors", donorRouter);
app.use("/seekers", seekerRouter);

app.use("/user", userRouter);


app.listen(port, () => {
	console.log(`Server is running at port no. : ${port}`);
});
