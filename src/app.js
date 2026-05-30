const express = require("express");
const userRouter = require("./routes/userRoutes");
const path = require("node:path");
const PORT = 3000;
const session = require("express-session");

const connectDB = require("./config/db");
const passport = require("passport");

const app = express();

connectDB();



app.set("views", path.join(__dirname,'views'));
app.set("view engine","ejs");



app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({secret: "catse", resave: false, saveUninitialized: false}));

require("./middleware/passport")(passport);
app.use(passport.session());

app.use((req,res,next)=>{
    res.locals.currentUser= req.user;
    next();
});

app.use("/", userRouter);



app.listen(PORT,()=>{
    console.log(`server is runnig at ${PORT}`);
});