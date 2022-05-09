const { Model, DataTypes } = require("sequelize");

module.exports = class Poll extends Model {
  static init(sequelize) {
    super.init(
        {
            name: DataTypes.STRING,
            final_date: DataTypes.STRING,
            access_id: DataTypes.STRING
        }, {
            sequelize
        }
    )
  }
  static associate(models){
    this.belongsToMany(models.Candidate, { foreignKey: 'poll_id', through:'candidates_polls', as:'candidates'})
  }
}
 