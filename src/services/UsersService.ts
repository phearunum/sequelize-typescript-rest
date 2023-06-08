
import db from '../models'
const User = db.Users;
const Op = db.Sequelize.Op;
const getUsers = async () => {
    return User.findAll()
}
const create = async (userBody : any) => {
    return await User.create(userBody)
}
const update =async(id:any,UserObj:any)=>{
  await User.update(UserObj,{
    where:{
        id:id
    }
   }).then((data: any)=>{
     return data;
   })
   .catch((err :any)=>{
    return err;
   })
}
const deleted = async (id:any) => {
    await User.destroy({
      where: { id: id }
    })
    .then((data:any) => {
      return data
     })
     .catch((err:any) => {
      return err
     });
}
  

export default { 
    getUsers,
    create,
    update,
    deleted
};