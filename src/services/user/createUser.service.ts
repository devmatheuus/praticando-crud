import User from '../../entities/User';
import database from '../../database';
import { ErrorHTTP } from '../../errors/ErrorHTTP';

export default function (name: string, age: number): User {
  const doUserExists = database.find(user => user.name === name);

  if (doUserExists) throw new ErrorHTTP(409, 'User already exists!');
  if (age < 18) throw new ErrorHTTP(409, 'Only 18+ users allowed!');

  const newUser = new User(name, age);

  database.push(newUser);

  return newUser;
}
