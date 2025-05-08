import type { Task } from "../../model/task/Task";

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
          <div key={task.taskId}>
            <div className="d-flex justify-content-between border-bottom-1 p-3 text-dark">
              <div className="card-title m-0">
                <h5>{task.name}</h5>
                <span className="fst-italic">{task.date}</span>
              </div>
              <div className="card-subtitle">
                <span className="badge rounded-pill app-primary-bg-color">
                  {task.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
