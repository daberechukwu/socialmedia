const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

dotenv.config();

mongoose.connect(
    process.env.DATABASE,
    { useNewUrlParser: true, useUnifiedTopology: true },
    ()=> {
        console.log("connect to mongodb");
    }
);


const app = express();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));



app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(8000, () =>{
    console.log("the backend server is running!!");
});