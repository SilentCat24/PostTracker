import User from '../model/userModel.js';
import user from '../model/userModel.js';

// fetching all the users 
export const fetchUsers=(req,res)=>{
  // access the User model and fetch the users detail from the 'users' collection
  User.find()
  .then((users)=>res.json(users))
  .catch((error)=>res.status(400).json(`Error: ${error}`));
  // send the  'users' res to the front-end 

}




// creating a new user
export const createUser=(req,res)=>{
   // receive the "username" form front end as the request
   const username=req.body.username;

   //  <input type="text" name='username'></input>
  //  sending request to front body which is having input and username as name
  // body is to access the front end part 
    // store the "username" in the "users collection" by using model
  // send response to the front end application

  const newUser = new User ({username:username})
  newUser.save()
  .then(()=>res.json('user added successfully........'))
  .catch((error)=>res.status(400).json(`Error: ${error}`));
  // save is promise 

}