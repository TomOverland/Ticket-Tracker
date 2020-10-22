module.exports = function(sequelize, DataTypes) {
    var Ticket = sequelize.define("Ticket", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return Ticket;
  };
  