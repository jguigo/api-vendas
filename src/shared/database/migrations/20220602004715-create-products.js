"use strict";

module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("products", {
         id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
         },
         name: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         price: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,
         },
         quantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
         },
         createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
         },
         updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
         },
      });
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("products");
   },
};
