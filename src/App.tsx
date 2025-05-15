import Dashboard from "./pages/dashboard/Dashboard";
import TaskNavbar from "./components/task/TaskNavbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NewTask from "./pages/task/NewTask";
import TaskDetails from "./pages/task/TaskDetails";
import TaskReports from "./pages/task/TaskReports";
import { UseAuthContext } from "./hooks/UseAuthContext";

const App = () => {
  const { isAuthenticated } = UseAuthContext();
  return (
    <BrowserRouter>
      <TaskNavbar />
      <Routes>
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!isAuthenticated ? <Register /> : <Navigate to={"/"} />}
        />
        <Route
          path="/"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/new-task"
          element={isAuthenticated ? <NewTask /> : <Navigate to="/login" />}
        />
        <Route
          path="/view-details/:taskId"
          element={isAuthenticated ? <TaskDetails /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit/:taskId"
          element={isAuthenticated ? <NewTask /> : <Navigate to="/login" />}
        />
        <Route
          path="/reports"
          element={isAuthenticated ? <TaskReports /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
