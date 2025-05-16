import { useFormik } from "formik";
import LoginValidationSchema from "../../validation/LoginValidationSchema";
import type { AuthRequest } from "../../model/AuthRequest";
import { UseLogin } from "../../hooks/task/UseLogin";

const Login = () => {
  const { login, errorMessage, isLoading } = UseLogin();
  const formik = useFormik<AuthRequest>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidationSchema,
    onSubmit: (authRequest: AuthRequest) => {
      //console.log("authRequest", authRequest);
      login(authRequest);
    },
  });

  return (
    <div className="d-flex justify-content-center align-items-center login-background">
      <div className="container col-md-4 col-sm-12">
        {isLoading && <p>Loading...</p>}
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger fst-italic">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger fst-italic">
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          {!isLoading && (
            <button
              className="btn btn-sm app-primary-bg-color btn-outline-light"
              type="submit"
            >
              Login
            </button>
          )}

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

export default Login;
