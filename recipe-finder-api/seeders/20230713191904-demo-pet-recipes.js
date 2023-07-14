'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pet_recipes', [{
      title: "Dog Cake",
      content: "Bake it for your furry friend!!!",
      img_url: "https://www.allrecipes.com/thmb/JlKhO7Qv9EUszsb1o-ZcyWnsvq8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8668108-90e7d4477a3847a29b2a071dee8bd1d1.jpg",
      tag: "dog",
      rate: 4.5,
      popularity: 1002,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      title: "Homemade Dog Treat",
      content: "Bake it for your furry friend!!!",
      img_url: "https://www.allrecipes.com/thmb/fedSW4_1HVEqm9lXlForeBsU7rY=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/133123-Peanut-Butter-and-Pumpkin-Dog-Treats-mfs-015-292437ac8ace4b019bb2a99ba7745f18.jpg",
      tag: "dog",
      rate: 4,
      popularity: 1200,
      created_at: new Date(),
      updated_at: new Date()
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pet_recipes', null, {});
  }
};
