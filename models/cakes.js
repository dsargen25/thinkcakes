module.exports = function (sequelize, DataTypes) {
  const Cakes = sequelize.define('Cakes', {
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
    instructions: {
      type: DataTypes.TEXT
    },
    ingredients: {
      type: DataTypes.TEXT
    },
    cakeimageUrl: {
      type: DataTypes.TEXT
    },
    cakeLikes: {
      type: DataTypes.INTEGER
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
