import { axiosInstance } from '../config/axios-instance.js';

export class ExternalApiService {
  async fetchTodo(id: number) {
    const response = await axiosInstance.get(`/todos/${id}`);
    return response.data;
  }
}
