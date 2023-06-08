import { Request, Response } from 'express';
import AuthService from '../services/AuthService';
import Encrypt from '../middleware/BcryptConfig';
import logger from '../middleware/Logger';
const jwt = require('jsonwebtoken');
const config = require(__dirname + '/../config/AppConfig.json');
const AuthLogin = async(req:Request,resp:Response)=>{
    logger.warn(req.body)
  const username =req.body.username;
  const password =req.body.password;
  await AuthService.Login(username)
  .then(async(data)=> {
    logger.info(data)
    const is_compared = await Encrypt.comparePassword(password,data.password);
    if(is_compared){
        const token = jwt.sign(
            { id: data.id, username }, config.TOKEN_KEY, { expiresIn: "2h", }
        );
        resp.status(200).send({
            data: data,
            msg: 'success',
            status:true,
            method: req.method,
            token: token,
            code:200
          });
    }else{
        resp.status(200).send({
            data: null,
            msg:'Invalid Credentials',
            status: 'false',
            method: req.method,
            token: null,
            code:4004
          });
    }
})
.catch(err => {
    logger.error(err.message)
  resp.status(200).send({
    msg: err
  });
});


}

export default {AuthLogin}