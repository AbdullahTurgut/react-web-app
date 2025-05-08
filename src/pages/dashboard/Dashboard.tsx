import TaskList from "../../components/task/TaskList";
import UseTasks from "../../hooks/task/UseTasks";

const Dashboard = () => {
  const { tasks, error, isLoading } = UseTasks();
  return (
    <div className="container">
      {isLoading && <p>Fetching for list...</p>}
      {error && <p>{error}</p>}
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Dashboard;
