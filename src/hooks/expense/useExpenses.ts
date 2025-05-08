import { useEffect, useState } from "react";
import type { Expense } from "../../model/expense/Expense";
import { getExpenses } from "../../services/expense/expense-service";

const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getExpenses()
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);
  return { expenses, error, isLoading };
};

export default useExpenses;
