
const mongoose = require('mongoose');

const SomeModelSchema = new mongoose.Schema({
  names: {
      type:String,
      require:[true,"name must be required"],
      minlength:[3, "name must be more then 3"],
      maxLength:[25," name must be less than 20"] 
    },
    nameAr:{
      type: String,
      require:[true,"nameAr must be required"],
     
      minlength:[3, "nameAr must be more then 3"],
      maxLength:[25," nameAr must be less than 20"] 

    },
    image:{
      type:String
    }
    
    
  },{
    timestamps:true
  });

const categoryModel = mongoose.model('category', SomeModelSchema);

module.exports = categoryModel;