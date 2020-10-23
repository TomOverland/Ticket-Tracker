module.exports = function(sequelize, DataTypes) {
    var Ticket = sequelize.define("Ticket", {
      text: DataTypes.STRING,
      department: DataTypes.STRING,
      description: DataTypes.TEXT,
      completed: {
        type: DataTypes.STRING,
        defaultValue: false
      },
      notes: DataTypes.TEXT
    });
    return Ticket;
  };
  