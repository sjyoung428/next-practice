import { useState } from "react";

export interface MutationResponse {
  ok: true;
  [key: string]: any;
}

interface MutationState<T> {
  loading: boolean;
  data?: T;
  error?: any;
}

type UseMutationResult<T> = [(data: any) => void, MutationState<T>];

const useMutation = <T extends any>(url: string): UseMutationResult<T> => {
  const [state, setState] = useState<MutationState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });

  const mutation = async <T extends {}>(data: T): Promise<void> => {
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
        const json = await fetchData.json();

        setState((prev) => ({ ...prev, data: json }));
      } catch (error) {}
    } catch (error) {
      setState((prev) => ({ ...prev, error }));
    }
    setState((prev) => ({ ...prev, loading: false }));
  };

  return [mutation, { ...state }];
};

export default useMutation;
