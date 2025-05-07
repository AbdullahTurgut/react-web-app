import Dashboard from "./pages/dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import TaskNavbar from "./components/TaskNavbar";

const App = () => {
  return (
    <>
      <TaskNavbar />
      <Dashboard />
    </>
  );
};

export default App;
