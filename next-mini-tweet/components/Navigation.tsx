import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type LoginType = "yes" | "no";

interface NavigationProps {
  login?: LoginType;
}

const Navigation = ({ login }: NavigationProps) => {
  const router = useRouter();
  return (
    <div>
      {login === "yes" && <button onClick={() => signOut()}>로그아웃</button>}
      {login === "no" && router.pathname !== "/create-account" && (
        <Link href="/create-account">
          <a> 회원가입 하러 가기</a>
        </Link>
      )}
    </div>
  );
};

export default Navigation;
