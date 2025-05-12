import * as Yup from "yup";

const taskValidationSchema = Yup.object({
  name: Yup.string()
    .required("Task name is required!")
    .min(3, "Task name must be at least 3 characters long!"),
  category: Yup.string()
    .required("Task category is required!")
    .min(2, "Task category must be at least 2 characters long!"),
  date: Yup.date().required("Task date is required!"),
});

export default taskValidationSchema;
