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
    // create a new cake post
    createNewCake: function (req, res) {
      cakesdb.Cakes.create(req.body).then(function (cakes) {
        res.json(cakes);
      });
    },
    // delete a cake post by id of post on User
    deleteCakePost: function (req, res) {
      cakesdb.Cakes.destroy({ where: { id: req.params.id } }).then(function (cakes) {
        res.json(cakes);
      });
    }
  };
};
