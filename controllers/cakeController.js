module.exports = function (cakesdb) {
  return {
    // get all cakes table and column names subject to change
    getAllCakes: function (req, res) {
      cakesdb.Cakes.findAll({}).then(function (cakes) {
        res.json(cakes);
      });
    },
    // get all cakes table and column names subject to change
    getSpecificCakes: function (req, res) {
      cakesdb.Cakes.findAll({ where: { Cakes: req.body.cakeName } }).then(function (cakes) {
        res.json(cakes);
      });
    },
    // get all cakes table and column names subject to change
    getUserCakes: function (req, res) {
      cakesdb.Cakes.findAll({ where: { Cakes: req.body.User.cakes } }).then(function (cakes) {
        res.json(cakes);
      });
    },
    // get all comments from comment table about specific cake
    getCakeComments: function (req, res) {
      cakesdb.Comments.findAll({ where: { Cakes: req.body.Comments.cakeName } }).then(function (comments) {
        res.json(comments);
      });
    },
    // get user submitted comments column titles subject to change
    getUserComments: function (req, res) {
      cakesdb.Comments.findAll({ where: { Cakes: req.params.userName } }).then(function (comments) {
        res.json(comments);
      });
    },
    // create a new cake post
    createNewCake: function (req, res) {
      cakesdb.Cakes.create(req.body).then(function (cakes) {
        res.json(cakes);
      });
    },
    // create new comment
    createNewComment: function (req, res) {
      cakesdb.Comments.create(req.body).then(function (comments) {
        res.json(comments);
      });
    },
    // delete a cake post by id of post on User
    deleteCakePost: function (req, res) {
      cakesdb.Cakes.destroy({ where: { id: req.params.id } }).then(function (cakes) {
        res.json(cakes);
      });
    },
    // delete a comment
    deleteComment: function (req, res) {
      cakesdb.Comments.destroy({ where: { id: req.params.id } }).then(function (comments) {
        res.json(comments);
      });
    }
  };
};
