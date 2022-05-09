const Sequelize = require('sequelize');
const dbConfig = require('./config');

const Poll = require('./models/Poll');
const Candidate = require('./models/Candidate');
const Voter = require('./models/Voter');

const connection = new Sequelize(dbConfig);

Poll.init(connection);
Candidate.init(connection);
Voter.init(connection);

Voter.associate(connection.models)
Candidate.associate(connection.models)
Poll.associate(connection.models)

module.exports = connection;