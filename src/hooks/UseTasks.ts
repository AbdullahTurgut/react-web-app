import { useEffect, useState } from "react";
import type { Task } from "../model/Task";
import { getTasks } from "../services/task-service";

const UseTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTasks()
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  });

  return { tasks, error, isLoading };
};

export default UseTasks;
