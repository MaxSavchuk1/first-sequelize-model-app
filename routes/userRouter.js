const { Router } = require('express');
const { userController } = require('../controllers');

const userRouter = Router();

userRouter.get('/', userController.getUsers);
userRouter.get('/:userId', userController.getUserById);
userRouter.post('/', userController.createUser);
userRouter.patch('/:userId', userController.updateUser);
userRouter.put('/:userId', userController.updateUser);
userRouter.delete('/:userId', userController.deleteUser);
userRouter.get('/:userId/tasks', userController.getUserTasks);

module.exports = userRouter;
