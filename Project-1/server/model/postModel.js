import mongoose from "mongoose";

//create post schema
//it has username,desc,date,duration and default property
const postSchema=mongoose.Schema(
  //user defined property
  {
    username:{
type:String,
required:true,

    },

    description:{
      type:String,
      required:true,
    },

    duration:{
      type:Number,
      required:true,
    },
    date:{
      type:Date,
      required:true,
    }

  },
 
  //default property
  {
timestamps:true,

  }
)


const Post =mongoose.model('Post',postSchema);


export default Post;