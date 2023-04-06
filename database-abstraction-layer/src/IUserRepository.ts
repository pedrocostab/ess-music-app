import { User } from 'music-app-models';
import { IRepository } from './IRepository';

export interface IUserRepository extends IRepository<User> {}