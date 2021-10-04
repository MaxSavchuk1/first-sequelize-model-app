const { User } = require('./../models');
const _ = require('lodash');

module.exports.getUsers = async (req, res, next) => {
  try {
    const foundUsers = await User.findAll({
      raw: true,
      attributes: { exclude: ['id', 'password', 'createdAt', 'updatedAt'] },
      limit: 5,
    });
    res.status(200).send(foundUsers);
  } catch (e) {
    next(e);
  }
};
module.exports.getUserById = async (req, res, next) => {
  const {
    params: { userId },
  } = req;
  try {
    const [foundUser] = await User.findAll({
      raw: true,
      where: { id: userId },
      attributes: { exclude: ['id', 'password', 'createdAt', 'updatedAt'] },
    });
    if (foundUser) {
      res.status(200).send(foundUser);
    } else {
      res.status(404).send('NOT FOUND');
    }
  } catch (e) {
    next(e);
  }
};
module.exports.createUser = async (req, res, next) => {
  const { body } = req;
  try {
    const createdUser = await User.create(body);
    const prepairedUser = _.omit(createdUser.get(), [
      'id',
      'password',
      'createdAt',
      'updatedAt',
    ]);
    res.status(201).send(prepairedUser);
  } catch (e) {
    next(e);
  }
};
module.exports.updateUser = async () => {
  console.log('update');
};
module.exports.deleteUser = async () => {
  console.log('delete');
};
module.exports.getUserTasks = async () => {
  console.log('getUserTasks');
};
