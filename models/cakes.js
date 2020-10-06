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
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE
    }
  });

  Cakes.associate = function (models) {
    Cakes.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'UserId'
      // allowNull: false
    });

    Cakes.hasMany(models.Comments, {
      onDelete: 'cascade',
      as: 'comments',
      foreignKey: 'commentId'
    });
  };
  return Cakes;
};
