const {Router} = require("express");
const userRouter = Router();
const userController = require("../controllers/usersController");

userRouter.get("/",userController.getUsers);
userRouter.get("/create",userController.signUpPage);
userRouter.post("/create",userController.createUser);

module.exports = userRouter;