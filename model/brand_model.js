const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
    brand: {
        type:String,
        require:[true,"Brand must be required"],
        unique:[true, "Brand must be unique"],
        minlength:[3, "Brand must be more then 3"],
        maxLength:[25," Brand must be less than 20"] 
      },
      slug:{
        type: String,
        lowercase:true,
  
      },
      image:{
        type:String
      }
      
}, { timestamps: true });

const Brand = mongoose.model("brand", brandSchema);

module.exports = Brand;
