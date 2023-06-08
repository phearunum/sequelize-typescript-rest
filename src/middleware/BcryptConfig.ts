
import bcrypt from 'bcrypt';

const Encrypt ={
    ccryptPassword: (password:any) =>
    bcrypt.genSalt(10)
    .then(((salt :any) => bcrypt.hash(password, salt)))
    .then((hash:any )=> hash),

    comparePassword: (password:any, hashPassword:any) =>
        bcrypt.compare(password, hashPassword)
        .then((resp :any)=> resp)

}

export default Encrypt;