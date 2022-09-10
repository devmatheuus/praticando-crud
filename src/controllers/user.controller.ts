import { Request, Response } from 'express';
import { ErrorHTTP, handleError } from '../errors/ErrorHTTP';
import createUserService from '../services/user/createUser.service';
import listUsersService from '../services/user/listUsers.service';

class UserController {
  createUser(req: Request, res: Response) {
    const { name, age } = req.body;

    try {
      const newUser = createUserService(name, age);

      return res.status(201).json(newUser);
    } catch (error) {
      if (error instanceof ErrorHTTP) {
        handleError(error, res);
      }
    }
  }

  listUsers(req: Request, res: Response) {
    try {
      const allUsers = listUsersService();

      return res.status(201).json(allUsers);
    } catch (error) {
      if (error instanceof ErrorHTTP) {
        handleError(error, res);
      }
    }
  }
}

export default new UserController();
