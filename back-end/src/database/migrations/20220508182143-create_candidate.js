'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.createTable('candidates', {  
   name: {type:Sequelize.STRING, allowNull: false},
   cpf: {type: Sequelize.STRING, allowNull: false},
   address: {type: Sequelize.STRING, allowNull: false},
   birthday:{type: Sequelize.STRING, allowNull: false},
   id: {
     type: Sequelize.INTEGER,
     primaryKey: true,
     allowNull: false,
     autoIncrement: true
   },
   created_at:{type:Sequelize.DATE, allowNull: false},
   updated_at:{type:Sequelize.DATE, allowNull: false} });
     
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('candidates');
  }
};
