import mongoose from "mongoose";

//create schema 
//user model has 2 property user defined and default
const userSchema = mongoose.Schema(
  // two properties,user defined properties
  {
  username:{
    type:String,
    required:true,//mentioning that it is a mandatory field
    unique:true,//mentioning that it is a mandatory field
    trim:true,
    minLength:3,
  }
},

//default property
{
timestamp:true,

}
);

const User= mongoose.model('User',userSchema);


export default User;