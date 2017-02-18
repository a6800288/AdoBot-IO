var Sequelize = require('sequelize');

var env = process.env.NODE_ENV || 'development';
var config = require('./config');
var sequelize;

if (env === 'development') {

  sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,

    {
      host: config.development.host,
      dialect: 'mysql',
      timezone: config.defaults.timezone,
      dialectOptions: {
        charset: 'utf8mb4'
      },
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    });
} else {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    pool: {
      max: 1,
      min: 0,
      idle: 1000
    }
  });
}

module.exports = sequelize;
