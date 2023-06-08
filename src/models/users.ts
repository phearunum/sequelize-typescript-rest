'use strict';
import {
  Model
}  from 'sequelize';
module.exports = (sequelize:any, DataTypes:any) => {
  class Users extends Model {

    static associate(models:any) {

    }
  }
  Users.init({
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    sex: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};