const { Model, DataTypes } = require("sequelize");

module.exports = class Voter extends Model {
  static init(sequelize) {
    super.init(
        {cpf: DataTypes.STRING},
        {
            sequelize
        }
    )
  }
  static associate(models){
    this.belongsTo(models.Candidate, { foreignKey: 'candidate_id', as:'candidate' })
  }
}
 