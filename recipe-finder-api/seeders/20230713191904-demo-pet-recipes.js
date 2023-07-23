'use strict';
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("user", [{
        first_name: "Jane",
        last_name: "Doe",
        email: "janeDoe@gmail.com",
        username: "JANE DOGGE",
        password: await bcrypt.hash("password", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Adam",
        last_name: "Smith",
        email: "smith@gmail.com",
        username: "Cat is the best",
        password: await bcrypt.hash("cat", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    const users = await queryInterface.sequelize.query(`SELECT uid FROM "user"`);
    const userId = users[0][0].uid;

    await queryInterface.bulkInsert('pet_recipe', [{
        title: "Dog Cake",
        content: "Bake it for your furry friend!!!2",
        img_url: "https://www.allrecipes.com/thmb/JlKhO7Qv9EUszsb1o-ZcyWnsvq8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8668108-90e7d4477a3847a29b2a071dee8bd1d1.jpg",
        tag: "dog",
        rate: 4.5,
        popularity: 1002,
        created_at: new Date(),
        updated_at: new Date(),
        UserId: userId,
      },
      {
        title: "Homemade Dog Treat",
        content: "Bake it for your furry friend!!!",
        img_url: "https://www.allrecipes.com/thmb/fedSW4_1HVEqm9lXlForeBsU7rY=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/133123-Peanut-Butter-and-Pumpkin-Dog-Treats-mfs-015-292437ac8ace4b019bb2a99ba7745f18.jpg",
        tag: "dog",
        rate: 4,
        popularity: 1200,
        created_at: new Date(),
        updated_at: new Date(),
        UserId: userId,
      },
    ]);

    await queryInterface.bulkInsert('blog', [ 
      {
      "img_url": "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/black-lab-favorite-dog-main-220315-e8e0ee.jpg",
      "blog_title": "A happy day with my dog",
      "blog_content": "Wow today was a happy day",
      created_at: new Date(),
      updated_at: new Date(),
      UserId: userId,
    },
    {
      "img_url": "https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg",
      "blog_title": "A happy day with my cat",
      "blog_content": "Wow today was a happy day WOOOOOO",
      created_at: new Date(),
      updated_at: new Date(),
      UserId: userId,
    }]);

    const blogs = await queryInterface.sequelize.query(`SELECT id FROM "blog"`);
    const blogId = blogs[0][0].id;

    await queryInterface.bulkInsert('comment', [ 
      {
      comment_content: "Wow this is an amazing post",
      created_at: new Date(),
      updated_at: new Date(),
      UserId: userId,
      BlogId: blogId
    },
    {
      comment_content: "WOW It IS EXACTLY TRUE",
      created_at: new Date(),
      updated_at: new Date(),
      UserId: userId,
      BlogId: blogId
    }]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pet_recipe', null, {});
    await queryInterface.bulkDelete('user', null, {});
    await queryInterface.bulkDelete('blog', null, {});
    await queryInterface.bulkDelete('comment', null, {});

  },
};
