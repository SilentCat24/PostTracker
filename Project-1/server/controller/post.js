import Post from '../model/postModel.js';
import post from '../model/postModel.js';
import User from '../model/userModel.js';


//Fetch all the post
export const fetchPosts=(req,res)=>{
// access the Post model and fetch the post details from the 'posts' collection.
// send the 'posts' details as 'res' to the front-end
Post.find()
.then((posts)=>res.json(posts))
.catch((error)=>res.status(400).json(`Error:${error}`))

}

//creating the post
export  const createPosts=(req,res)=>{
// Receive 'username','description','duration','date', from front-end using request.body
const username=req.body.username;
const description=req.body.description;
const duration=Number(req.body.duration);
const date=date.parse(req.body.date);


//creating object 
const newPost = new ({
username:username,
description:description,
duration:duration,
date:date,

});
//  sending created object and save in to the database using the save() method.
newPost.save()
.then( ()=>res.json('post added successfully'))
.catch((error)=>res.status(400).json(`Error :${error}`))

}




//Fetching an individual post - id
export const fetchPost=(req,res)=>{
  // receive a an id from front-end using request.params.id
  const id =req.params.id;
  //access the 'post' model and fetch the post by using the method find() by id
  // send the post details as 'res' to the front-end 
  Post.findById(id)
  .then((post)=>res.json(post))
  .catch((error)=>res.status(400).json(`Error :${error}`));

}

// deleting post  -id
export const deletePost=(req,res)=>{
const id=req.params.id;
Post.findByIdAndDelete(id)
.then((post)=>res.json('deleted successfully'))
.catch((error)=>res.status(400).json(`Error :${error}`));
}

//Updating the post   -id
export const updatePost=(req,res)=>{
// Receive the 'id' from the front end using req.params.id
// Receive Updated 'username','description','duration','date' from front-end using req.body
// access the existing 'username','description','duration','date' stored in database and update with
//  -- the new 'username','description','duration','date' received from front-end using req.body
const id=req.params.id;
const username=req.body.username;
const description=req.body.description;
const duration=Number(req.body.duration);
const date=Date.parse(req.body.date);


Post.findById(id)
.then((post)=>{
  post.username=req.body.username;;
  post.description=req.body.description;
  post.duration=Number(req.body.duration);
  post.date=Date.parse(req.body.date);

  post.save()
  .then((post)=>res.json("Post Updated Successfully"))
  .catch((error)=>res.status(400).json(`Error :${error}`));

})

.catch((error)=>res.status(400).json(`Error :${error}`));

}