import taskLogo from "../assets/tasklogo.webp";
const TaskLogo = () => {
  return (
    <a className="navbar-brand" href="#">
      <img
        src={taskLogo}
        alt="logo"
        width={48}
        height={48}
        className="rounded-circle"
      />
    </a>
  );
};

export default TaskLogo;
