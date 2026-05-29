const express = require("express");
const userRouter = require("./routes/userRoutes");
const path = require("node:path");
const app = express();
const PORT = 3000;
const connectDB = require("./config/db");


connectDB();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("views", path.join(__dirname,'views'));
app.set("view engine","ejs");


app.use("/", userRouter);

app.listen(PORT,()=>{
    console.log(`server is runnig at ${PORT}`);
});