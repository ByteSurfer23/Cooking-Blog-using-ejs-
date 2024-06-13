const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: {
        type:String,
        required:'This field is required'
    },
    image: {
        type:String,
        required:'This field is required',
    }
});// creating a new schema and for various inputs present in the schema, the properties are assigned 
module.exports=mongoose.model('Category',categorySchema);//exporting the schema 