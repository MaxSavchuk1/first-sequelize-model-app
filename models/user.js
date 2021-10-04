'use strict';

const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate (models) {}
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z]{1,39}$/,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z]{1,39}$/,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        set (v) {
          this.setDataValue('password', bcrypt.hashSync(v, 10));
        },
      },
      gender: { type: DataTypes.STRING },
      birthday: {
        type: DataTypes.DATEONLY,
        // validate: {
        //   isBefore: new Date(),
        // },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
