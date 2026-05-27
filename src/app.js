const express = require("express");
const userRouter = require("./routes/userRoutes");
const path = require("node:path");
const app = express();
const PORT = 3000;

app.set("views", path.join(__dirname,'views'));
app.set("view engine","ejs");

app.use(express.urlencoded({extended: true}));
app.use("/", userRouter);

app.listen(PORT,()=>{
    console.log(`server is runnig at ${PORT}`);
});