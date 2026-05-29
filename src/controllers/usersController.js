const User = require("../model/userModel")
async function getUsers(req,res){
    res.render("index");
    //res.send("users list requested");
}

async function createUser(req,res){
   
    try{
        const newUser = new User({
            userName : req.body.userName,
            userEmail: req.body.userEmail

        });
        const saveduser = await newUser.save();
        console.log("Data successfully saved to MongoDb:", saveduser);
        ///res.status(200).send("sign-up successful");
        return res.redirect("/");

    }catch(error){
        console.error("Failed to save data:", error);
        res.status(500).send("Error saving data.");
    
    }
    
}
async function signUpPage(req,res){
    res.render("sign-up");
}

module.exports = {
    getUsers,
    createUser,
    signUpPage

}