import express  from 'express'
const authRoute=express.Router();

import AuthController  from '../controllers/AuthConstroller';
authRoute
        .post("/login",AuthController.AuthLogin)
  export default authRoute;