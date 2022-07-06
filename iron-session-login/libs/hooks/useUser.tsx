import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

const useUser = () => {
  const { data, error } = useSWR("/api/profile");
  console.log(data, "hi");
  const router = useRouter();
  useEffect(() => {
    if (!data) {
      router.replace("/create-account");
    }
  }, [data, router]);
  return { user: data?.profile, isLoading: !data && !error };
};
export default useUser;
