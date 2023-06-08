import express  from 'express'
const routers=express.Router();

import Users  from '../controllers/UserController';
  routers
        .get("/list", Users.getUser)
        .post("/create",Users.Create)
        .post("/update",Users.Update)

  export default routers;