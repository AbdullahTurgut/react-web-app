import apiClient from "../../config/apiClient";
import type { Profile } from "../../model/task/Profile";

export const createProfile = (profile: Profile) => {
  return apiClient.post<Profile>("/register", profile);
};
