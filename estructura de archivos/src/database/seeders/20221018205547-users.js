'use strict';
const{hashSync}=require('bcryptjs')
const usuarios = require('../../data/userDB.json');
const users= usuarios.map(({userName,firstName,lastName,email,password,birthDay,aboutMe,rolId})=>{
  return {
    userName,
    firstName,
    lastName,
    email,
    password: hashSync(password,10),
    birthDay,
    aboutMe,
    rolId,
    createdAt : new Date()
  }
})
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Users', users, {});
    
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('Users', null, {});
    
  }
};