import { useEffect, useState } from "react";
import TaskList from "../../components/task/TaskList";
import UseTasks from "../../hooks/task/UseTasks";
import DashboardStatus from "./DashboardStatus";
import AppHelper from "../../utils/AppHelper";

const Dashboard = () => {
  const loggedInUser: string = AppHelper.getLoggedInUser();
  const [totalStatus, setTotalStatus] = useState<number>(0);
  const { tasks, isLoading } = UseTasks();

  useEffect(() => {
    function getTotalStatus(): number {
      let i = 0;
      tasks.forEach((task) => {
        if (task.status === "in_progress") {
          i += 1;
        }
      });
      return i;
    }

    const totalStatus = getTotalStatus();
    setTotalStatus(totalStatus);
  }, [tasks]);

  return (
    <div className="container">
      {isLoading && <p>Fetching for list...</p>}
      <DashboardStatus
        loggedInUser={loggedInUser}
        totalInProgressStatus={totalStatus}
      />
      <hr />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Dashboard;
