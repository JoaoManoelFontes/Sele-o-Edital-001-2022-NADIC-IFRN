'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('Candidates_Polls', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
       }, 
       candidate_id: {
        type:Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'candidates', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
       }, 
       poll_id: {
        type:Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'polls', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
       },
       created_at:{type:Sequelize.DATE, allowNull: false},
       updated_at:{type:Sequelize.DATE, allowNull: false}
      });

  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('Candidates_Polls');
     
  }
};
