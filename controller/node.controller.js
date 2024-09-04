const Notemodel = require("../model/note.schema")


const noteGetController = async(req,res) => {
   try{
    const getData = await Notemodel.find();
    res.json({message : "success", data : getdata});

   }
   catch(err){
    res.json({message : "failed", error : err});
   }
}



const notePostController = async(req,res) => {
    try{
        console.log(req.body);
        const newdata = new Notemodel(req.body);
        const saveData = await newdata.save();
        res.json({message : "success", data : getdata});
    
       }
       catch(err){
        res.json({message : "failed", error : err});
       }
}




const notePutController =async(req,res) => {
    try{
        const {id} = req.params;
        const findData = await Notemodel.findById(id);

        if(!findData) return res.json({message : "failed", error: "data not found"});
        findData.title = req.body.title;
        findData.author = req.body.author;
        findData.content = req.body.content;
               }
       catch(err){
        res.json({message : "failed", error : err});
       }
}






const notePatchController =(req,res) => {
    res.send('note note ok.')
}

const noteDeleteController =(req,res) => {
    res.send('note delete ok.')
}





module.exports ={
    noteGetController, 
    notePostController, 
    notePutController, 
    notePatchController, 
    noteDeleteController 
} 
