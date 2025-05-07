import { FaBars } from "react-icons/fa";
import TaskLogo from "./TaskLogo";

const TaskNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <TaskLogo />
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Dashboard
            </a>
            <a className="nav-link" href="#">
              New Task
            </a>
          </div>
        </div>
        <div className="d-flex" role="search">
          <button className="btn btn-sm btn-outline-light">Register</button>
          <button className="btn btn-sm btn-outline-light mx-1">Login</button>
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
