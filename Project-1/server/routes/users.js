import express from 'express';
import {fetchUsers,createUser} from '../controller/user.js';

const router =express.Router();


//Fetching all the users
// http://localhost:5000/users
router.get('/',fetchUsers);


//creating a new user
// http://localhost:5000/users/add
router.post('/add',createUser);

export default router;