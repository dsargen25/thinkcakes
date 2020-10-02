module.exports = function (sequelize, DataTypes) {
  const Cakes = sequelize.define('Cakes', {
    // text: DataTypes.STRING,
    // description: DataTypes.TEXT
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    difficulty: {
      type: DataTypes.INTEGER
    },
    ingredients: {
      type: DataTypes.TEXT
    }
  });

  Cakes.associate = function (models) {
    Cakes.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Cakes;
};
