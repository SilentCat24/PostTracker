import express from 'express';
// importing function name with logic for routes.
import { fetchPosts,fetchPost,createPosts,deletePost,updatePost } from '../controller/post.js';


const router = express.Router();//express method router(we can basic http request)

//fetching all the post
// this is also a function which is having 2 parameters end points and logic for function
// normal method but we write logic in controller
// router.get('/',(req,res)=>{

// }) 
// in the name of logic(fetch post in below line) function has written in controller
router.get('/',fetchPosts)     

//creating a new post
router.post('/add',createPosts)

//fetching an individual post
router.get('/:id',fetchPost)

//deleting the the post
router.delete('/:id',deletePost)


//updating an existing post
router.patch('/update/:id',updatePost);


export default router;
