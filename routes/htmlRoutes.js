const router = require('express').Router();

module.exports = (db) => {
  // Load register page
  router.get('/register', (req, res) => {
    if (req.isAuthenticated()) {
      res.redirect('/profile');
    } else {
      res.render('register');
    }
  });

  // Load profile page
  router.get('/profile', (req, res) => {
    if (req.isAuthenticated()) {
      db.User.findOne({
        where: {
          id: req.session.passport.user.id
        }
      }).then(() => {
        const user = {
          userInfo: req.session.passport.user,
          isloggedin: req.isAuthenticated()
        };
        // console.log(user);
        res.render('profile', user);
      });
    } else {
      res.redirect('/');
    }
  });

  // // Load profile page
  // router.get('/', (req, res) => {
  //   if (req.isAuthenticated()) {
  //     db.Cakes.findAll({
  //       where: {
  //         id: req.session.cakes.name
  //       }
  //     }).then(() => {
  //       const cakes = {
  //         userInfo: req.session.cakes,
  //         isloggedin: req.isAuthenticated()
  //       };
  //       // console.log(user);
  //       res.render('profile', cakes);
  //     });
  //   } else {
  //     res.redirect('/');
  //   }
  // });

  router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render('dashboard', user);
    } else {
      res.render('dashboard');
    }
  });

  // Load dashboard page
  router.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render('dashboard', user);
    } else {
      res.render('dashboard');
    }
  });

  // // Load Cake Page
  // router.get('/cake-page', (req, res) => {
  //   if (req.isAuthenticated()) {
  //     const user = {
  //       user: req.session.passport.user,
  //       isloggedin: req.isAuthenticated()
  //     };
  //     res.render('cake-page', user);
  //   } else {
  //     res.render('cake-page');
  //   }
  // });

  // Load Carrot Cake Page
  router.get('/cakes/carrotcake', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render('carrotcake', user);
    } else {
      res.render('carrotcake');
    }
  });

  // Load Red Velvet Cake Page
  router.get('/cakes/redvelvetcake', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render('redvelvetcake', user);
    } else {
      res.render('redvelvetcake');
    }
  });

  // Load Chocolate Cake Page
  router.get('/cakes/chocolatecake', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render('chocolatecake', user);
    } else {
      res.render('chocolatecake');
    }
  });

  // Load Adam Gates Profile Page
  router.get('/user-profiles/adamgates', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render('adamgates', user);
    } else {
      res.render('adamgates');
    }
  });

  // Load Mark Lee Profile Page
  router.get('/user-profiles/marklee', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render('marklee', user);
    } else {
      res.render('marklee');
    }
  });

  // Load Carla Bean Profile Page
  router.get('/user-profiles/carlabean', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render('carlabean', user);
    } else {
      res.render('carlabean');
    }
  });

  // Submit a Recipe Page
  router.get('/submit-cake', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render('submit-cake', user);
    } else {
      res.redirect('/');
    }
  });

  // Logout
  router.get('/logout', (req, res, next) => {
    req.logout();
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie('connect.sid', { path: '/' });
      res.redirect('/');
    });
  });

  // Render 404 page for any unmatched routes
  router.get('*', function (req, res) {
    res.render('404');
  });

  return router;
};
