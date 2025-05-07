import ExpenseList from "../../components/ExpenseList";
import useExpenses from "../../hooks/UseExpenses";

const Dashboard = () => {
  const { expenses, error, isLoading } = useExpenses();

  return (
    <div>
      {isLoading && <p>Fetching for list...</p>}
      {error && <p>{error}</p>}
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Dashboard;
