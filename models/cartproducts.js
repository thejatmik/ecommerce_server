'use strict';
module.exports = (sequelize, DataTypes) => {
  class CartProducts extends sequelize.Sequelize.Model {}
  CartProducts.init({
    CartId: {
      type: DataTypes.INTEGER
    },
    ProductId: {
      type: DataTypes.INTEGER
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'quantyty is required'
        },
        notEmpty: {
          args: true,
          msg: 'quantity is required'
        },
        isNum: {
          args: true,
          msg: 'quantity must be number'
        },
        min: {
          args: '0',
          msg: 'quantity cannot be negative number'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'CartProducts'
  })
  CartProducts.associate = function(models) {
    // associations can be defined here
  };
  return CartProducts;
};