const router = require('express').Router();
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const cakesdb = require('../models/cakes.js');

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

// Cake controller
// Does this need to be wrapped as an exported module? Or should it be placed
// in the above export?
const CakeController = require('../controllers/cakeController')(cakesdb);

router.get('/api/cakes', CakeController.getAllCakes);
router.get('/api/cakes/:id', CakeController.getSpecificCakes);
router.get('/api/cakes/:id', CakeController.getUserCakes);
router.post('/api/cakes', CakeController.createNewCake);
router.delete('/api/cakes/:id', CakeController.deleteCakePost);

// Comment controller
