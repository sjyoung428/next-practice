import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const useUser = () => {
  const { data, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (
      status === "unauthenticated" &&
      !(router.pathname === "/log-in" || router.pathname === "/create-account")
    ) {
      router.replace("/log-in");
    }
  }, [router, status]);

  return { data, status };
};

export default useUser;
