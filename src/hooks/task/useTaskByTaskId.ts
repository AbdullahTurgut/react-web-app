import { useEffect, useState } from "react";
import type { Task } from "../../model/task/Task";
import { getTaskByTaskId } from "../../services/task/task-service";

const useTaskByTaskId = (taskId: string) => {
  const [task, setTask] = useState<Task | undefined>();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getTaskByTaskId(taskId)
      .then((response) => setTask(response.data))
      .catch((error) => setErrorMessage(error.response.data.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { task, errorMessage, isLoading, setIsLoading, setErrorMessage };
};

export default useTaskByTaskId;
