

import db from '../models'
const UserLogin = db.Users;
const Login =async(username:string)=>{

 return await UserLogin.findOne({
    where:{
        username:username
    }
 })
}


 export default {Login}