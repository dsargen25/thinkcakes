module.exports = function (sequelize, DataTypes) {
  const Comments = sequelize.define('Comments', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    likes: {
      type: DataTypes.BOOLEAN
    }
  });

  Comments.associate = function (models) {
    Comments.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Comments.belongsTo(models.Cakes, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Comments;
};
