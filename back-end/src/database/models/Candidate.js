const { Model, DataTypes } = require("sequelize");

module.exports = class Candidate extends Model {
  static init(sequelize) {
    super.init(
        {
            name: DataTypes.STRING,
            cpf: DataTypes.STRING,
            address: DataTypes.STRING,
            birthday:DataTypes.STRING
        }, {
            sequelize
        }
    )
  }
  static associate(models){
    this.hasMany(models.Voter, { foreignKey: 'candidate_id', as:'voters' });
    this.belongsToMany(models.Poll, { foreignKey: 'candidate_id', through:'candidates_polls', as:'polls'})
  }
}
 