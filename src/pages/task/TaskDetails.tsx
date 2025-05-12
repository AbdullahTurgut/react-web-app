import { Link, useNavigate, useParams } from "react-router-dom";
import { formatStatus } from "../../utils/CurrencyUtils";
import { getFormatTaskDate } from "../../utils/DateUtils";
import useTaskByTaskId from "../../hooks/task/useTaskByTaskId";
import ConfirmDialog from "../../components/task/ConfirmDialog";
import { useState } from "react";
import { deleteTaskByTaskId } from "../../services/task/task-service";

const TaskDetails = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const navigate = useNavigate();
  const { task, errorMessage, isLoading, setIsLoading, setErrorMessage } =
    useTaskByTaskId(taskId as string);

  const handleCancel = () => {
    console.log("Cancel clicked");
    setShowDialog(false);
  };

  const handleConfirm = () => {
    setIsLoading(true);
    deleteTaskByTaskId(taskId!)
      .then((response) => {
        console.log("Task deleted successfully:", response.data);
        if (response && response.status === 204) {
          navigate("/"); // Redirect to the task list or home page after deletion
        }
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
        setShowDialog(false);
      });
  };

  return (
    <div className="container mt-2">
      {isLoading && <p>Loading...</p>}
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      <div className="d-flex flex-row-reverse mb-2">
        <button
          className="btn btn-sm btn-danger"
          onClick={() => setShowDialog(true)}
        >
          Delete
        </button>
        <button
          className="btn btn-sm btn-warning mx-2"
          onClick={() => navigate(`/edit/${taskId}`)}
        >
          Edit
        </button>
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
                <th>Category</th>
                <td>{task?.category ? task.category : "N/A"}</td>
              </tr>
              <tr>
                <th>Date</th>
                <td>{task?.date ? getFormatTaskDate(task?.date) : "N/A"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ConfirmDialog
        title="Confirm Delete"
        message="Are you sure want to delete this item ? "
        show={showDialog}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default TaskDetails;
