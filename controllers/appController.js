
module.exports = function (db) {
  return {
    // GET ALL OF CAKES TABLE AND COLUMN NAMES (SUBJECT TO CHANGE)
    getAllCakes: function (req, res) {
      db.Cakes.findAll({}).then(function (cakes) {
        res.json(cakes);
      });
    },
    // get all cakes table and column names subject to change
    getSpecificCakes: function (req, res) {
      db.Cakes.findAll({ where: { id: req.params.id } })
        .then(function (cakes) {
          res.json(cakes);
        });
    },
    // get all cakes table and column names subject to change
    getUserCakes: function (req, res) {
      db.Cakes.findAll({ where: { UserId: req.params.userId } })
        .then(function (cakes) {
          console.log(cakes);
          res.json(cakes);
        });
    },
    // get all comments from comment table about specific cake
    getCakeComments: function (req, res) {
      // this needs a join
      db.Comments.findAll({
      }).then(function (comments) {
        res.json(comments);
      });
    },
    // get user submitted comments column titles subject to change
    getUserComments: function (req, res) {
      // this needs a join
      db.Comments.findAll({ where: { creatorId: req.params.creatorId } }).then(function (cakes) {
        res.json(cakes);
      });
    },
    // create a new cake post
    createNewCake: function (req, res) {
      // this next line ties the user id with the cake
      // req.body.UserId = req.user.id;
      console.log(req.body);
      db.Cakes.create(req.body).then(function (cakes) {
        res.json(cakes);
      });
    },

    // create new comment
    createNewComment: function (req, res) {
      // this next line ties the user id with the comment
      // req.body.userName = req.user.id;
      db.Comments.create(req.body).then(function (comments) {
        res.json(comments);
      });
    },
    // delete a cake post by id of post on User
    deleteCakePost: function (req, res) {
      db.Cakes.destroy({ where: { id: req.params.id } }).then(function (cakes) {
        res.json(cakes);
      });
    },

    // DELETE A COMMENT
    deleteComment: function (req, res) {
      db.Comments.destroy({ where: { id: req.params.id } }).then(function (comments) {
        res.json(comments);
      });
    }
  };
};
