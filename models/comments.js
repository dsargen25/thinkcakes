module.exports = function (sequelize, DataTypes) {
  const Comments = sequelize.define('Comments', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user: {
      type: DataTypes.STRING,
      allowNull: true
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    likes: {
      type: DataTypes.INTEGER
    }
  });

  Comments.associate = function (models) {
    Comments.belongsTo(models.User, {
      foreignKey: 'creatorId'
    });
    Comments.belongsTo(models.Cakes, {
      foreignKey: 'cakeId'
    });
  };
  return Comments;
};
