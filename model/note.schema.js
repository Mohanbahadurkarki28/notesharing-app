const mongoose = require("mongoose");

const noteschema = new mongoose.Schema({
    title : String,
    author : String,
    content : String,
});

const Notemodel =mongoose.model("notes", noteschema);
module.exports = Notemodel;
