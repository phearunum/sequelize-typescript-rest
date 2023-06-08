import express, { Request, Response } from "express";
import Users from "../services/UsersService";
import Encrypt from "../middleware/BcryptConfig";
const getUser = async (req: Request, resp: Response) => {
await Users.getUsers()
  .then(data=>{
    resp.status(200).send({
        data: data,
        msg: "success",
        method: req.method,
      });
  }).catch(error=>{
    resp.status(500).send({
        msg: "error",
        valid: error,
        type: error.message,
      });
  })
};
const Create = async (req: Request, resp: Response) => {
    const userObj=req.body;
    userObj.password = await Encrypt.ccryptPassword(req.body.password)
  await Users.create(userObj)
    .then((data) => {
      resp.status(200).send({
        data: data,
        msg: "success",
        method: req.method,
      });
    })
    .catch((error) => {
      resp.status(500).send({
        msg: "error",
        valid: error,
        type: error.message,
      });
    });
};

const Update = async (req: Request, resp: Response) => {
    const { id, ...dataObj } =req.body;
    dataObj.password = await Encrypt.ccryptPassword(req.body.password)
    Users.update(id,dataObj)
    .then(data=>{
          return resp.status(200).send({
                data: data,
                msg: "success",
                method: req.method,
              });
    })
    .catch(error=>{
        resp.status(500).send({
            msg: "error",
            valid: error,
            type: error.message,
          });
    })

};

export default { getUser, Create,Update };
