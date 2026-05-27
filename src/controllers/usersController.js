async function getUsers(req,res){
    res.render("index");
    //res.send("users list requested");
}

async function createUser(req,res){
   
    const {userName, userEmail} = req.body;
    console.log(userName,userEmail);
    return res.redirect("/");
}
async function signUpPage(req,res){
    res.render("sign-up");
}

module.exports = {
    getUsers,
    createUser,
    signUpPage

}