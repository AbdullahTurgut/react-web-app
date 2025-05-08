import { formatStatus } from "../../utils/CurrencyUtils";
import { getFormattedToday } from "../../utils/DateUtils";

interface Props {
  loggedInUser: string;
  totalInProgressStatus: number;
}

const DashboardStatus = ({ loggedInUser, totalInProgressStatus }: Props) => {
  return (
    <div>
      <div className="text-center">
        <h5 className="mb-4">In Progress Tasks</h5>
        <h3>
          <span className="badge rounded-pill app-primary-bg-color">
            {totalInProgressStatus}{" "}
            {totalInProgressStatus > 1 ? "Tasks" : "Task"} --------{" "}
            {formatStatus("in_progress")}
          </span>
        </h3>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          Welcome, <b className="app-primary-color">{loggedInUser}</b>
        </div>
        <div>{getFormattedToday()}</div>
      </div>
    </div>
  );
};

export default DashboardStatus;
