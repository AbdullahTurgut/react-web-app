import { useFormik } from "formik";
import type { Task } from "../../model/task/Task";
import taskValidationSchema from "../../validation/TaskValidationSchema";
import Dropdown from "../../components/task/Dropdown";
import { taskCategories } from "../../utils/AppConstants";
import {
  saveOrUpdateTask,
  getTaskByTaskId,
} from "../../services/task/task-service";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const NewTask = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [initialValues, setInitialValues] = useState<Task>({
    name: "",
    status: "in_progress",
    category: "",
    date: new Date().toISOString().split("T")[0],
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (taskId) {
      // call the service method to get the existing task
      setIsLoading(true);
      getTaskByTaskId(taskId)
        .then((response) => {
          if (response && response.data) {
            setInitialValues(response.data);
          }
        })
        .catch((error) => setErrorMessage(error.message))
        .finally(() => setIsLoading(false));
    }
  }, [taskId]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (values: Task) => {
      saveOrUpdateTask(values)
        .then((response) => {
          if (response && response.status === 201) {
            navigate("/");
          } else if (response && response.status === 200) {
            navigate(`/view-details/${taskId}`);
          }
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage(error.message);
        });
    },
    validationSchema: taskValidationSchema,
  });
  return (
    <div className="d-flex justify-content-center align-items-center mt-2">
      <div className="container col-md-4 col-sm-8 col-xs-12">
        {errorMessage && (
          <p className="text-danger fst-italic">{errorMessage}</p>
        )}
        {isLoading && <p>Loading...</p>}
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-danger fst-italic">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Status</label>
            <input
              type="text"
              className="form-control"
              value="In Progress"
              disabled
            />
            <input type="hidden" name="status" value="in_progress" />
          </div>
          <Dropdown
            options={taskCategories}
            id="category"
            name="category"
            label="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.category}
            touched={formik.touched.category}
          />
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="form-control"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="text-danger fst-italic">{formik.errors.date}</div>
            ) : null}
          </div>
          <button
            className="btn btn-sm btn-primary btn-outline-light"
            type="submit"
          >
            Save
          </button>
          <button
            className="btn btn-sm app-primary-bg-color btn-outline-light mx-1"
            type="reset"
            onClick={formik.handleReset}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
