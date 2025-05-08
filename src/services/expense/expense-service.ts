import apiClient from "../../config/apiClient";
import type { Expense } from "../../model/expense/Expense";

export const getExpenses = () => {
  return apiClient.get<Expense[]>("/expenses");
};
