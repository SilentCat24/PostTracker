import Express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js'; //calling routers for end points
import userRoutes from './routes/users.js';

dotenv.config();
const app=Express();
app.use(Express.json);//responses:text/plain,text/html, application/json
app.use(cors());


const PORT =process.env.PORT;
const CONNECTION_URL=process.env.CONNECTION_URL;
// console.log(CONNECTION_URL);    

// // mongoose.connect(CONNECTION_URL )
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>{
  console.log(`server is running at at the port:${PORT}`)
}))
.catch((error)=>{
  console.log(`${error} connection is not established`)
});

// app.use('/endpoints', router for that end point)
app.use('/posts',postRoutes);//crud-get,post,patch,deletecd
app.use('/users',userRoutes);//crud get,post,patch,delete

//   app.listen(PORT,()=>{
//   console.log(`Server is running at the port :${PORT}`);
// });