import { NextFunction, Request, Response } from "express";
const config = require(__dirname + '/../config/AppConfig.json');
import jwt from 'jsonwebtoken';

const verifyToken = (req:Request, res:Response, next:NextFunction) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({message:"A token is required for authentication"});
  }
  try {
    const decoded = jwt.verify(token,config.TOKEN_KEY);
    req.body.token = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};
export default verifyToken;