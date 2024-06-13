const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
    name: {
        type:String,
        required:'This field is required'
    },
    description: {
        type:String,
        required:'This field is required'
    },
    email: {
        type:String,
        required:'This field is required'
    },
    ingredients: {
        type:Array,
        required:'This field is required'
    },
    category: {
        type:String,
        enum: ['Thai','American','Chinese','Mexican','Indian','Spanish'],
        required:'This field is required'
    },
    image: {
        type:String,
        required:'This field is required'
    },
});// creating a new schema and for various inputs present in the schema, the properties are assigned 
recipeSchema.index({name:'text', description: 'text'});




module.exports=mongoose.model('Recipe',recipeSchema);//exporting the schema
// enum can only be used if the type of data is string or nums, if you put array or something here, it wont work