import { FaBars } from "react-icons/fa";
import TaskLogo from "./TaskLogo";
import { NavLink } from "react-router-dom";

const TaskNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <TaskLogo />
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink className="nav-link" to={"/"}>
              Dashboard
            </NavLink>

            <NavLink className="nav-link" to={"/new-task"}>
              New Task
            </NavLink>
            <NavLink className="nav-link" to={"/reports"}>
              Task Reports
            </NavLink>
          </div>
        </div>
        <div className="d-flex" role="search">
          <NavLink className="btn btn-sm btn-outline-light" to={"/register"}>
            Register
          </NavLink>
          <NavLink className="btn btn-sm btn-outline-light mx-1" to={"/login"}>
            Login
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars color="white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TaskNavbar;
