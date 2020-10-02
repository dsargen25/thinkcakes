const router = require('express').Router();
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

module.exports = (passport, db) => {
  const AuthController = require('../controllers/authController')(passport, db);
  const AppController = require('../controllers/appController')(db);

  // Authentication
  router.post('/register', AuthController.register);
  router.post('/login', AuthController.login);
  router.get('/logout', AuthController.logout);
  router.put('/user/:id', ensureAuthenticated, AuthController.updateUser);
  router.delete('/user/:id', ensureAuthenticated, AuthController.deleteUser);
  router.post('/user/confirm', AuthController.confirmAuth);

  // App
  router.get('/examples', AppController.getExamples);
  router.post('/examples', AppController.createExample);
  router.delete('/examples/:id', AppController.deleteExample);

  return router;
};

module.exports = cakesdb => {
  const CakeController = require('../controllers/cakeController');
  // Cake Routes
  router.get('/api/cakes', function (req, res) {
    CakeController.getAllCakes(function (result) {
      console.log({ Cakes: result });
    });
  });
  router.get('/api/cakes/:id', function (req, res) {
    CakeController.getSpecificCakes(function (result) {
      console.log({ Cakes: result });
    });
  });
  router.get('/api/cakes/:id', function (req, res) {
    CakeController.getUserCakes(function (result) {
      console.log({ Cakes: result });
    });
  });
  router.post('/api/cakes', function (req, res) {
    CakeController.createNewCake(function (result) {
      console.log({ Cakes: result });
      console.log('New cake has been added to the database!');
    });
  });
  router.delete('/api/cakes/:id', function (req, res) {
    CakeController.deleteCakePost(function () {
      console.log('Cake entry has been deleted!');
    });
  });

  // Comment Routes
  router.get('/api/comments', function (req, res) {
    CakeController.getCakeComments(function (result) {
      console.log({ Comments: result });
    });
  });
  router.get('/api/comments/:id', function (req, res) {
    CakeController.getUserComments(function (result) {
      console.log({ Comments: result });
    });
  });
  router.post('/api/comments', function (req, res) {
    CakeController.createNewComment(function (result) {
      console.log({ Comments: result });
      console.log('New comment has been added!');
    });
  });
  router.delete('/api/comments/:id', function (req, res) {
    CakeController.deleteComment(function () {
      console.log('Comment has been deleted!');
    });
  });

  return router;
};
// router.get('/api/cakes', CakeController.getAllCakes);
// router.get('/api/cakes/:id', CakeController.getSpecificCakes);
// router.get('/api/cakes/:id', CakeController.getUserCakes);
// router.post('/api/cakes', CakeController.createNewCake);
// router.delete('/api/cakes/:id', CakeController.deleteCakePost);

// Added console log to make sure each of the routes work as intended
// for initial testing.
