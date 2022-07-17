import useUser from "@lib/hooks/useUser";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navigation = () => {
  const { status } = useUser();
  const router = useRouter();
  return (
    <div>
      {status === "authenticated" && (
        <div className="flex items-center">
          <h1 onClick={() => router.push("/")} className="cursor-pointer">
            홈
          </h1>
          <div className="flex w-full justify-end gap-5 ">
            <Link href="/tweet/write">
              <a>글 쓰기</a>
            </Link>
            <button onClick={() => signOut()}>로그아웃</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
