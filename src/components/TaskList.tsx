import type { Task } from "../model/Task";

interface Props {
  tasks: Task[];
}
const TaskList = ({ tasks }: Props) => {
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.taskId}>
              <td>{task.name}</td>
              <td>{task.status}</td>
              <td>{task.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
