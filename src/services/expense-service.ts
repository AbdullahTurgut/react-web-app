import type { Expense } from './../model/Expense';
import apiClient from "../config/apiClient"

export const getExpenses = () => {
    return apiClient.get<Expense[]>("/expenses");
}