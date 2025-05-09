import apiClient from "../../config/apiClient";
import type { Task } from "../../model/task/Task";

export const getTasks = () => {
  return apiClient.get<Task[]>("/tasks");
};

export const getTaskByTaskId = (taskId: string) => {
  return apiClient.get<Task>(`/tasks/${taskId}`);
};
