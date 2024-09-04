const express = require("express");
const app = express();
require("./db/config");
const userRouter = require("./router/node.router");

app.use(express.json());
app.use(userRouter);



app.get("/", (req,res) =>{res.send ('Server tested ok')});



app.listen(3000, ()=> console.log('server running at port 3000'))
