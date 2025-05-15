import { signout } from "../services/task/auth-service";
import { UseAuthContext } from "./UseAuthContext";

export const UseSignout = () => {
  const { updateAuth } = UseAuthContext();
  const logout = () => {
    signout().then((response) => {
      if (response && response.status === 204) {
        localStorage.clear();
        updateAuth(false);
      }
    });
  };

  return { logout };
};
