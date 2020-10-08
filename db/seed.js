module.exports = (db) => {
  db.User.create({
    firstName: 'Adam',
    lastName: 'Gates',
    email: 'adamgates@mail.com',
    userName: 'AdamGates',
    profileUrl: 'https://i.ibb.co/D8sLYHh/adamgates.jpg',
    userBio: 'Hello, this is the bio for Adam Gates',
    password: process.env.ADMIN_USER_PWD,
    isAdmin: true
  }).then(() => {
    console.log('inside the seed file');
    db.User.create({
      firstName: 'Mark',
      lastName: 'Lee',
      email: 'marklee@mail.com',
      userName: 'MarkLee',
      profileUrl: 'https://i.ibb.co/G2jZHt0/marklee.jpg',
      userBio: 'Hello, this is the bio for Mark Lee',
      password: process.env.USER_PWD,
      isAdmin: false
    }).then(() => {
      console.log('inside the seed file');
      db.User.create({
        firstName: 'Carla',
        lastName: 'Bean',
        email: 'carlabean@mail.com',
        userName: 'CarlaBean',
        profileUrl: 'https://i.ibb.co/tYNcD47/carlabean.jpg',
        userBio: 'Hello, this is the bio for Carla Bean',
        password: process.env.USER_PWD,
        isAdmin: false
      }).then(() => {
        db.Cakes.create({
          name: 'Carrot Cake',
          difficulty: 5,
          instructions: '<li>Heat the oven to 350 degrees Fahrenheit (176C). Grease two 9-inch round cake pans and line the bottom with parchment paper then grease the top of the paper. Or, grease and flour the bottom and sides of both pans.</li><li>In a medium bowl, whisk flour, baking soda, salt, and the cinnamon until well blended.</li><li>In a separate bowl, whisk the oil, sugars, and vanilla. Whisk in eggs, one at a time, until combined.</li><li>Switch to a large rubber spatula. Scrape the sides and bottom of the bowl then add the dry ingredients in 3 parts, gently stirring until they disappear and the batter is smooth. Stir in the carrots, nuts, and raisins.</li><li>Divide the batter between the prepared cake pans. Bake until the tops of the cake layers are springy when touched and when a toothpick inserted into the center of the cake comes out clean, 35 to 45 minutes.</li><li>Cool cakes in pans for 15 minutes then turn out onto cooling racks, peel off parchment paper and cool completely. (If you find that a cake layer is stuck to the bottom of the pan, leave the cake pan upside down and allow gravity to do its thing).</li><li>In a large bowl, beat cream cheese with a handheld mixer on medium speed until creamy, about 1 minute.</li><li>Beat in the powdered sugar, a 1/4 cup at a time until fluffy. Pour in cream and beat on medium speed for 1 minute. Chill covered until ready to frost cake.</li><li>When the cake layers are completely cool, frost the top of one cake layer, place the other cake layer on top. Decoratively swirl the top of the cake with remaining frosting, leaving the sides unfrosted. Scatter nuts on top.</li>',
          ingredients: '<li>2 cups (250 grams) all-purpose flour</li><li>2 teaspoons baking soda</li><li>1/2 teaspoon fine sea salt</li><li>1 1/2 teaspoons ground cinnamon</li><li>1 1/4 cups (295 ml) canola or other vegetable oil</li><li>1 cup (200 grams) granulated sugar</li><li>1 cup (200 grams) lightly packed brown sugar</li><li>1 teaspoon vanilla extract</li><li>4 large eggs</li><li>3 cups (300 grams) grated peeled carrots (5 to 6 medium carrots)</li><li>1 cup (100 grams) coarsely chopped pecans</li><li>1/2 cup (65 grams) raisins</li>',
          cakeimageUrl: 'https://i.ibb.co/tC4TzgL/carrotcake.jpg',
          cakeLikes: 8,
          UserId: 2
        }).then(() => {
          db.Cakes.create({
            name: 'Red Velvet Cake',
            difficulty: 7,
            instructions: '<li>Preheat oven to 350°F (177°C). Spray two 9-inch cake pans well with nonstick cooking spray, line the bottoms of the pans with parchment paper, and set aside.</li><li>In a large mixing bowl, whisk together the cake flour, cocoa powder, baking soda, and salt. Then sift the dry ingredients to remove any lumps of cocoa powder. Set aside.</li><li>In the bowl of a stand mixer fitted with the paddle attachment, or in a large mixing bowl using an electric mixer, cream together the butter and sugar on medium speed for 4-5 minutes. Add the eggs and mix until fully combined, then mix in the oil, red food color, vanilla extract, and vinegar stopping to scrape down the sides of the bowl as needed.</li><li>Mix in the dry ingredients in three additions alternating with the buttermilk, starting and ending with the dry ingredients. Make sure to mix each addition until just combined and be careful not to over mix the batter.</li><li>Evenly distribute the cake batter between the two prepared cake pans and spread the batter around into one even layer. Tap the pans on the counter 2-3 times to remove any air bubbles from the cakes.</li><li>Bake at 350°F (177°C) for 28-32 minutes or until a toothpick inserted into the center of the cakes comes out clean. Carefully remove from the oven and place on a wire rack to cool in the pans for 15-20 minutes. Then, carefully remove the cakes from the cake pans and place on the wire rack to cool completely. </li><li>To make the cream cheese frosting:</li><li>In the bowl of a stand mixer fitted with the paddle attachment, or in a large mixing bowl using an electric mixer, beat the cream cheese until smooth. Add the butter and mix for about 30 seconds-1 minute until well combined and smooth.</li><li>Mix in the powdered sugar and vanilla extract and continue mixing until fully combined, scraping down the sides of the bowl as needed.</li><li>To assemble the cake</li><li>Level the tops of each cake with a knife or cake leveler. Place one of the cake layers on a cake stand or plate, top with a layer of frosting, and smooth it out into one even layer. Place the second layer on top, then use the remaining frosting to frost the top and sides of the cake.</li>',
            ingredients: '<li>2 and 2/3 cups (295 grams) cake flour (spooned & leveled)</li><li>1/4 cup (22 grams) natural unsweetened cocoa powder</li><li>1 teaspoon baking soda</li><li>1/2 teaspoon salt</li><li>1/2 cup (115 grams) unsalted butter softened to room temperature</li><li>1 and 3/4 cups (350 grams) granulated sugar</li><li>2 large eggs room temperature</li><li>1/2 cup (120 ml) canola or vegetable oil</li><li>1 (1-ounce) bottle liquid red food color</li><li>2 teaspoons pure vanilla extract</li><li>1 teaspoon distilled white vinegar</li><li>1 and 1/3 cups (320 ml) buttermilk room temperature</li><li>For the cream cheese frosting:</li><li>12 ounces cream cheese softened</li><li>3/4 cup (175 grams) unsalted butter softened to room temperature</li><li>3 cups (360 grams) powdered sugar</li><li>1 and 1/2 teaspoons pure vanilla extract</li>',
            cakeimageUrl: 'https://i.ibb.co/QjfZJnT/redvelvetcake.jpg',
            cakeLikes: 31,
            UserId: 2
          }).then(() => {
            db.Cakes.create({
              name: 'Chocolate Cake',
              difficulty: 2,
              instructions: '<li>Heat oven and prepare pans: Preheat oven to 350 degrees. Butter two 9-inch round cake pans then line bottom of each with a round of parchment paper. Butter parchment paper. Wrap cake pans with baking strips for the most level cake.</li><li>Mix dry ingredients, then mix in boiling water: In a large, heat proof mixing bowl, whisk together granulated sugar brown sugar, cocoa powder, baking soda and salt. Carefully pour boiling water in to cocoa mixture and immediately whisk to blend well. Allow to cool 5 minutes.</li><li>Mix in wet ingredients: Using an electric hand mixer set on low speed blend in vegetable oil and melted butter until combined. Add eggs, egg yolks and vanilla extract and blend just to combined. Then add flour and blend until combined, and finish by blending in milk and sour cream just until combined.</li><li>Pour into pans and bake: Divide mixture evenly among 2 prepared pans. Bake in preheated oven until toothpick inserted into center of cake comes out clean, about 29 – 34 minutes.</li><li>Cool: Allow to cool in pan 5 minutes, run butter knife around edge of cake and invert onto a wire rack and allow to cool completely.</li><li>Frost: Add frosting to top of one round then top with second cake and frost top and sides of cake. Store in an airtight container.</li>',
              ingredients: '<li>Granulated sugar, brown sugar and powdered</li><li>Cocoa powder</li><li>Baking Soda</li><li>Salt</li><li>Boiling water</li><li>Vegetable Oil</li><li>Unsalted butter</li><li>Eggs and egg yolks</li><li>Vanilla extract</li><li>All purpose flour</li><li>Sour cream</li><li>Milk</li>',
              cakeimageUrl: 'https://i.ibb.co/n7Ts0Wp/chocolatecake.jpg',
              cakeLikes: 27,
              UserId: 2
            }).then(() => {
              db.Comments.create({
                user: 'AdamGates',
                body: '<li>I enjoyed this recipe very much, I was never been much of a fan of carrots until now</li>',
                likes: 13,
                UserId: 1,
                CakeId: 1
              });
            }).then(() => {
              db.Comments.create({
                user: 'CarlaBean',
                body: '<li>The cake was a bit complicated, but I was able to follow through. Can I substitute the the cream cheese frosting?</li>',
                likes: 13,
                UserId: 3,
                CakeId: 2
              });
            }).then(() => {
              db.Comments.create({
                user: 'AdamGates',
                body: '<li>I found this to be an excellent recipe to make, and the sour cream gives the cake a nice tartness.</li>',
                likes: 13,
                UserId: 1,
                CakeId: 3
              });
            });
          });
        });
      });
    });
  });
};
