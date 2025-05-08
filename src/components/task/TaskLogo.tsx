import { Link } from "react-router-dom";
import taskLogo from "../../assets/tasklogo.webp";
const TaskLogo = () => {
  return (
    <Link className="navbar-brand" to={"/"}>
      <img
        src={taskLogo}
        alt="logo"
        width={48}
        height={48}
        className="rounded-circle"
      />
    </Link>
  );
};

export default TaskLogo;
