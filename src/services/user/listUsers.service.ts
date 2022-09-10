import User from '../../entities/User';
import database from '../../database';
import { ErrorHTTP } from '../../errors/ErrorHTTP';

export default function (): Array<User> {
  if (!database.length) throw new ErrorHTTP(404, 'No users available!');

  return database;
}
