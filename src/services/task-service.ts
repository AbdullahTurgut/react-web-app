import apiClient from "../config/apiClient";
import type { Task } from "../model/Task";

export const getTasks = () => {
  return apiClient.get<Task[]>("/tasks");
};
