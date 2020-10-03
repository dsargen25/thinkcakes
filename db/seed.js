module.exports = (db) => {
  db.User.create({
    firstName: 'Adam',
    lastName: 'Gates',
    email: 'adam@gates.com',
    userName: 'AdamGates',
    password: process.env.ADMIN_USER_PWD,
    isAdmin: true
  }).then(() => {
    console.log('inside the seed file');
    db.User.create({
      firstName: 'Uma',
      lastName: 'Pearson',
      email: 'uma@pearson.com',
      userName: 'UmaPearson',
      password: process.env.USER_PWD,
      isAdmin: false
    }).then(() => {
      db.Cakes.create({
        name: 'red velvet',
        difficulty: 3,
        ingredients: 'lots and lots of em',
        UserId: 2
      }).then(() => {
        db.Comments.create({
          title: 'new comment',
          body: 'this is a comment.',
          likes: false,
          UserId: 1,
          CakeId: 1
        });
      });
    });
  });
};
