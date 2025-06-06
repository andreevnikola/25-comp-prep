import 'reflect-metadata';
import { AppDataSource } from './database/data-source.js';
import { UserService } from './services/UserService.js';
import { ExternalApiService } from './external/ApiCommunicationService.js';

const main = async () => {
  await AppDataSource.initialize();

  const userService = new UserService();
  const api = new ExternalApiService();

  const user = await userService.create('Vlad', 'vlad@examplei.com');
  console.log('User created:', user);

  const todo = await api.fetchTodo(1);
  console.log('Fetched todo:', todo);
};

main();
