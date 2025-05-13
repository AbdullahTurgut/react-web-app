import { useState } from "react";
import type { Profile } from "../../model/task/Profile";
import { createProfile } from "../../services/task/auth-service";

export const useRegister = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [toast, setToast] = useState<string>("");
  const signup = (profile: Profile) => {
    setIsLoading(true);
    createProfile(profile)
      .then((response) => {
        if (response && response.status === 201) {
          // Handle successful registration, e.g., redirect to login page
          setToast("Profile is successfully created");
        }
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { errorMessage, isLoading, signup, toast };
};
