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
      <h5 className="card-header d-flex justify-content-between">
        <span>Name</span>
        <span>Category</span>
        <span>Status</span>
      </h5>
      <div className="card-body">
        {tasks.map((task) => (
          <Link
            key={task.taskId}
            to={`/view-details/${task.taskId}`}
            style={{ textDecoration: "none" }}
          >
            <div className="d-flex justify-content-between align-items-center border-bottom p-3 text-dark">
              {/* Name */}
              <div className="text-start" style={{ flex: 1 }}>
                <h5 className="m-0">{task.name}</h5>
                <span className="fst-italic">
                  {getFormatTaskDate(task.date)}
                </span>
              </div>

              {/* Category */}
              <div className="text-center" style={{ flex: 1 }}>
                <span className="fw-semibold">{task.category}</span>
              </div>

              {/* Status */}
              <div className="text-end" style={{ flex: 1 }}>
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
