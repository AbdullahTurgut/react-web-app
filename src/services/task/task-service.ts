import apiClient from "../../config/apiClient";
import type { Task } from "../../model/task/Task";

export const getTasks = () => {
  return apiClient.get<Task[]>("/tasks");
};
