const express = require("express");
const userRouter = require("./routes/userRoutes");
const path = require("node:path");
const app = express();
const PORT = 3000;
const session = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const connectDB = require("./config/db");
const User = require("./model/userModel");

//connectDB();



app.set("views", path.join(__dirname,'views'));
app.set("view engine","ejs");

app.use(session({secret: "cats", resave: flase, saveUninitialized: false}));
app.use(passport.session());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/", userRouter);

passport.use(
    new localStrategy(async(username,password,done)=>{
        try{
            const user = await User.findOne({ userName : userName});
            if(!user){
                return done(null, false,{message: "Incorrect username"});
            }
            if(user.userPassword !== userPassword){
                return done(null, false,{message: "Incorrect password"});

            }
            return done(null,user);
        }catch(err){
            return done(err);
        }
    })
);

app.listen(PORT,()=>{
    console.log(`server is runnig at ${PORT}`);
});