const {Router} = require("express");
const userRouter = Router();
const userController = require("../controllers/usersController");

userRouter.get("/",userController.getUsers);

module.exports = userRouter;