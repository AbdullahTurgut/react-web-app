import TaskList from "../../components/TaskList";
import UseTasks from "../../hooks/UseTasks";

const Dashboard = () => {
  //const { expenses, error, isLoading } = useExpenses();
  //  <ExpenseList expenses={expenses} />

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
