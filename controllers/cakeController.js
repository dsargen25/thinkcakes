// const Cakes = require('../models/cakes');
// const Users = require('../models/user');

// module.exports = function (cakesdb) {
// return {
//   // get all cakes table and column names subject to change
//   getAllCakes: function (req, res) {
//     cakesdb.Cakes.findAll({}).then(function (cakes) {
//       res.json(cakes);
//     });
//   },
//   // get all cakes table and column names subject to change
//   getSpecificCakes: function (req, res) {
//     cakesdb.Cakes.findAll({ where: { name: req.body.name } }).then(function (cakes) {
//       res.json(cakes);
//     });
//   },
//   // get all cakes table and column names subject to change
//   getUserCakes: function (req, res) {
//     cakesdb.Cakes.findOne({ where: { name: req.body.name } }).then(function (cakes) {
//       res.json(cakes);
//     });
//   },
//   // get all comments from comment table about specific cake
//   getCakeComments: function (req, res) {
//     // this needs a join
//     cakesdb.Comments.findAll({
//       where: {
//         $or: [
//           { '$Cakes.id$': 'Comments.id$' },
//           {}
//         ]
//       },
//       include: {
//         model: Cakes
//       }
//     }).then(function (comments) {
//       res.json(comments);
//     });
//   },
//   // get user submitted comments column titles subject to change
//   getUserComments: function (req, res) {
//     // this needs a join
//     cakesdb.Comments.findAll({
//       where: {
//         $or: [
//           { '$Comments.id$': 'User.id$' },
//           {}
//         ]
//       },
//       include: {
//         model: Users
//       }
//     }).then(function (comments) {
//       res.json(comments);
//     });
//   },
//   // create a new cake post
//   createNewCake: function (req, res) {
//     cakesdb.Cakes.create(req.body).then(function (cakes) {
//       res.json(cakes);
//     });
//   },
//   // create new comment
//   createNewComment: function (req, res) {
//     cakesdb.Comments.create(req.body).then(function (comments) {
//       res.json(comments);
//     });
//   },
//   // delete a cake post by id of post on User
//   deleteCakePost: function (req, res) {
//     cakesdb.Cakes.destroy({ where: { id: req.params.id } }).then(function (cakes) {
//       res.json(cakes);
//     });
//   },
//   // delete a comment
//   deleteComment: function (req, res) {
//     cakesdb.Comments.destroy({ where: { id: req.params.id } }).then(function (comments) {
//       res.json(comments);
//     });
//   }
// };
// };
