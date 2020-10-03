const Cakes = require('../models/cakes');
const Users = require('../models/user');

module.exports = function (db) {
  return {
    // Get all examples
    // getExamples: function (req, res) {
    //   db.Example.findAll({ where: { UserId: req.session.passport.user.id } }).then(function (dbExamples) {
    //     res.json(dbExamples);
    //   });
    // },
    // // Create a new example
    // createExample: function (req, res) {
    //   db.Example.create(req.body).then(function (dbExample) {
    //     res.json(dbExample);
    //   });
    // },
    // // Delete an example by id
    // deleteExample: function (req, res) {
    //   db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
    //     res.json(dbExample);
    //   });
    // },
    // get all cakes table and column names subject to change
    getAllCakes: function (req, res) {
      console.log(db.Cakes);
      db.Cakes.findAll({}).then(function (cakes) {
        console.log('List of cakes = ' + cakes);
        res.json(cakes);
      });
    },
    // get all cakes table and column names subject to change
    getSpecificCakes: function (req, res) {
      db.Cakes.findAll({ where: { id: req.params.id } }).then(function (cakes) {
        res.json(cakes);
      });
    },
    // get all cakes table and column names subject to change
    getUserCakes: function (req, res) {
      db.Users.findOne({ where: { userName: req.body.userName }, include: { model: Cakes } }).then(function (cakes) {
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
      db.Comments.findAll({
        where: {
          $or: [
            { '$Comments.id$': 'User.id$' },
            {}
          ]
        },
        include: {
          model: Users, Cakes
        }
      }).then(function (comments) {
        res.json(comments);
      });
    },
    // create a new cake post
    createNewCake: function (req, res) {
      db.Cakes.create(req.body).then(function (cakes) {
        res.json(cakes);
      });
    },
    // create new comment
    createNewComment: function (req, res) {
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
    // delete a comment
    deleteComment: function (req, res) {
      db.Comments.destroy({ where: { id: req.params.id } }).then(function (comments) {
        res.json(comments);
      });
    }
  };
};
