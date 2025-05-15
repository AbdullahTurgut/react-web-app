import { authenticate } from "./../../services/task/auth-service";
import { useState } from "react";
import type { AuthRequest } from "../../model/AuthRequest";
import { useNavigate } from "react-router-dom";
import { UseAuthContext } from "../UseAuthContext";

export const UseLogin = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { updateAuth } = UseAuthContext();
  const login = (authRequest: AuthRequest) => {
    setIsLoading(true);
    authenticate(authRequest)
      .then((response) => {
        //console.log("response", response);
        localStorage.setItem("taskUser", JSON.stringify(response.data));
        updateAuth(true);
        navigate("/");
      })
      .catch((error) => {
        //console.error("Error during registration:", error);
        setErrorMessage(error.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { errorMessage, isLoading, login };
};
