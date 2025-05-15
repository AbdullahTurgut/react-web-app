import { FaBars } from "react-icons/fa";
import TaskLogo from "./TaskLogo";
import { NavLink } from "react-router-dom";
import { UseAuthContext } from "../../hooks/UseAuthContext";
import { UseSignout } from "../../hooks/UseSignout";

const TaskNavbar = () => {
  const { isAuthenticated } = UseAuthContext();
  const { logout } = UseSignout();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <TaskLogo />
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            {isAuthenticated ? (
              <>
                <NavLink className="nav-link" to={"/"}>
                  Dashboard
                </NavLink>

                <NavLink className="nav-link" to={"/new-task"}>
                  New Task
                </NavLink>
                <NavLink className="nav-link" to={"/reports"}>
                  Task Reports
                </NavLink>
              </>
            ) : null}
          </div>
        </div>
        <div className="d-flex" role="search">
          {!isAuthenticated ? (
            <>
              <NavLink
                className="btn btn-sm btn-outline-light"
                to={"/register"}
              >
                Register
              </NavLink>
              <NavLink
                className="btn btn-sm btn-outline-light mx-1"
                to={"/login"}
              >
                Login
              </NavLink>
            </>
          ) : null}
          {isAuthenticated ? (
            <>
              <button
                className="btn btn-sm btn-outline-light mx-1"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : null}

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
