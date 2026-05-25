const express = require("express");
const userRouter = require("./routes/userRoutes");
const app = express();
const PORT = 3000;

app.use("/", userRouter);

app.listen(PORT,()=>{
    console.log(`server is runnig at ${PORT}`);
});