import Dashboard from "./pages/dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import TaskNavbar from "./components/task/TaskNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NewTask from "./pages/task/NewTask";
import TaskDetails from "./pages/task/TaskDetails";
import TaskReports from "./pages/task/TaskReports";

const App = () => {
  return (
    <BrowserRouter>
      <TaskNavbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new-task" element={<NewTask />} />
        <Route path="/view-details/:taskId" element={<TaskDetails />} />
        <Route path="/reports" element={<TaskReports />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
