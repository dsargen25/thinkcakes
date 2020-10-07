const router = require('express').Router();
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

module.exports = (passport, db) => {
  const AuthController = require('../controllers/authController')(passport, db);
  const AppController = require('../controllers/appController')(db);

  // AUTHENTICATION
  router.post('/register', AuthController.register);
  router.post('/login', AuthController.login);
  router.get('/logout', AuthController.logout);
  router.put('/user/:id', ensureAuthenticated, AuthController.updateUser);
  router.delete('/user/:id', ensureAuthenticated, AuthController.deleteUser);
  router.post('/user/confirm', AuthController.confirmAuth);

  // CAKE ROUTES
  router.get('/cakes', AppController.getAllCakes);
  router.get('/cakes/:id', AppController.getSpecificCakes);
  router.get('/userCakes/:userId', AppController.getUserCakes);
  router.post('/cakes', AppController.createNewCake);
  router.delete('/cakes/:id', AppController.deleteCakePost);

  // COMMENT ROUTES
  router.get('/comments', AppController.getCakeComments);
  router.get('/comments/:creatorId', AppController.getUserComments);
  router.post('/comments', AppController.createNewComment);
  router.delete('/comments/:id', AppController.deleteComment);

  return router;
};