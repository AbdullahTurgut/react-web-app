import { useEffect } from "react";
import TaskList from "../../components/task/TaskList";
import UseTasks from "../../hooks/task/UseTasks";
import DashboardStatus from "./DashboardStatus";

const Dashboard = () => {
  const loggedInUser: string = "user@gmail.com";
  const { tasks, error, isLoading } = UseTasks();

  function getTotalStatus(): number {
    let i = 0;
    tasks.map((task) => (task.status === "in_progress" ? i++ : 0));
    return i;
  }

  return (
    <div className="container">
      {isLoading && <p>Fetching for list...</p>}
      {error && <p>{error}</p>}
      <DashboardStatus
        loggedInUser={loggedInUser}
        totalInProgressStatus={getTotalStatus()}
      />
      <hr />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Dashboard;
