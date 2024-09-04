const express = require("express");
const { 
    noteGetController, 
    notePostController,
    notePutController, 
    notePatchController, 
    noteDeleteController 
} = require("../controller/node.controller");
const userRouter = new express()

userRouter.get("/note", noteGetController);
userRouter.post("/note", notePostController);
userRouter.put("/note", notePutController);
userRouter.patch("/note", notePatchController);
userRouter.delete("/note", noteDeleteController);

module.exports = userRouter;
