import { useState } from "react";

interface IMutation<T> {
  loading: boolean;
  data?: T;
  error?: any;
}

type MutationResult<T> = [(data: T) => void, IMutation<T>];

const useMutation = <T extends any>(url: string): MutationResult<T> => {
  const [state, setState] = useState<IMutation<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });
  const mutation = async (data: T) => {
    setState((prev) => ({ ...prev, loading: true }));
    try {
      const fetchData = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      try {
        const data = await fetchData.json();
        setState((prev) => ({ ...prev, data }));
      } catch (error) {}
    } catch (error) {
      setState((prev) => ({ ...prev, error }));
    }
    setState((prev) => ({ ...prev, loading: false }));
  };
  return [mutation, { ...state }];
};

export default useMutation;
