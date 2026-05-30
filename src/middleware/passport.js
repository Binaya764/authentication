//const session = require("express-session");
//const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("../model/userModel");



module.exports= function(passport){
    passport.use(
    new localStrategy({
        usernameField: 'userName',
        passwordField: 'userPassword'
    },
        async(username,password,done)=>{
        console.log("passport received:", username, password);
        try{
            const user = await User.findOne({ userName : username});
            console.log("database found user:", user);
            if(!user){
                return done(null, false,{message: "Incorrect username"});
            }
            if(user.userPassword !== password){
                return done(null, false,{message: "Incorrect password"});

            }
            console.log("Authentication successful");
            return done(null,user);
        }catch(err){
            return done(err);
        }
    })
);

passport.serializeUser((user,done)=>{
    done(null, user.id);
});

passport.deserializeUser(async (id, done)=>{
    try{
        const user = await User.findById(id);
        done(null,user);
    }catch(err){
        done(err);
    }
});

};