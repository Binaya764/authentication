const {Router} = require("express");
const userRouter = Router();
const userController = require("../controllers/usersController");
const passport = require("passport");


userRouter.get("/",userController.getUsers);
userRouter.get("/login",userController.loginPage);
userRouter.get("/create",userController.signUpPage);
userRouter.post("/create",userController.createUser);
userRouter.post("/login", passport.authenticate("local",{
    successRedirect: "/",
    failureRedirect: "/login"
}))

module.exports = userRouter;