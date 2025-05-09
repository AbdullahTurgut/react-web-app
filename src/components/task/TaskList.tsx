import { Link } from "react-router-dom";
import type { Task } from "../../model/task/Task";
import { formatStatus } from "../../utils/CurrencyUtils";
import { getFormatTaskDate } from "../../utils/DateUtils";

interface Props {
  tasks: Task[];
}
const TaskList = ({ tasks }: Props) => {
  return (
    <div className="card">
      <h5 className="card-header">
        Name
        <span className="float-end">Status</span>
      </h5>
      <div className="card-body">
        {tasks.map((task) => (
          <Link
            key={task.taskId}
            to={`/view-details/${task.taskId}`}
            style={{ textDecoration: "none" }}
          >
            <div className="d-flex justify-content-between border-bottom-1 p-3 text-dark">
              <div className="card-title m-0">
                <h5>{task.name}</h5>
                <span className="fst-italic">
                  {getFormatTaskDate(task.date)}
                </span>
              </div>
              <div className="card-subtitle">
                <span className="badge rounded-pill app-primary-bg-color">
                  {formatStatus(task.status)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
