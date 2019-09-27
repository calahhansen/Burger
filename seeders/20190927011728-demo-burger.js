'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
//used seeder example from docs
      return queryInterface.bulkInsert('Burgers', [{
        burger_name: 'Chicken Bacon Ranch Cheeseburger',
        devoured: false
      }], {});
  },

  down: (queryInterface, Sequelize) => {
//used seeder example from docs
      return queryInterface.bulkDelete('Burgers', null, {});
  }
};
