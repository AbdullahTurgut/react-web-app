import { Link, useParams } from "react-router-dom";
import { formatStatus } from "../../utils/CurrencyUtils";
import { getFormatTaskDate } from "../../utils/DateUtils";
import useTaskByTaskId from "../../hooks/task/useTaskByTaskId";

const TaskDetails = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const { task, errorMessage, isLoading } = useTaskByTaskId(taskId as string);

  return (
    <div className="container mt-2">
      {isLoading && <p>Loading...</p>}
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      <div className="d-flex flex-row-reverse mb-2">
        <button className="btn btn-sm btn-danger">Delete</button>
        <button className="btn btn-sm btn-warning mx-2">Edit</button>
        <Link className="btn btn-sm btn-secondary" to={"/"}>
          Back
        </Link>
      </div>
      <div className="card">
        <div className="card-body p-3">
          <table className="table table-borderless table-responsive">
            <tbody>
              <tr>
                <th>Name</th>
                <td>{task?.name}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>{task?.status ? formatStatus(task?.status) : "N/A"}</td>
              </tr>
              <tr>
                <th>Date</th>
                <td>{task?.date ? getFormatTaskDate(task?.date) : "N/A"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
