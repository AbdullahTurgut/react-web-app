import apiClient from "../../config/apiClient";
import type { Task } from "../../model/task/Task";

export const getTasks = () => {
  return apiClient.get<Task[]>("/tasks");
};

export const getTaskByTaskId = (taskId: string) => {
  return apiClient.get<Task>(`/tasks/${taskId}`);
};

export const deleteTaskByTaskId = (taskId: string) => {
  return apiClient.delete(`/tasks/${taskId}/delete`);
};

export const saveOrUpdateTask = (task: Task) => {
  if (task.taskId) {
    return apiClient.put<Task>(`/tasks/${task.taskId}/update`, task);
  }
  return apiClient.post<Task>("/tasks/save", task);
};
