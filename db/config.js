const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mohankarki86555:6apcNBG4TvhNDe1d@cluster0.19r0d.mongodb.net/mynoteapp?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> console.log("db connected."))
.catch((err)=> console.log('db connection failed, error : ${err}'));