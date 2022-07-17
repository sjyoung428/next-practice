import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

interface FormState {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<FormState>();
  const { status } = useSession();
  const router = useRouter();

  const onValid = async (formData: FormState) => {
    await signIn("credentials", {
      redirect: false,
      email: formData.email,
      password: formData.password,
    });
  };
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [router, status]);
  return (
    <>
      <h1 className="text-center">로그인 하기</h1>
      <form
        className="flex flex-col items-center "
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: true,
          })}
          className="border border-black"
          type="email"
          placeholder="이메일"
        />
        <input
          {...register("password", {
            required: true,
          })}
          className="border border-black"
          type="password"
          placeholder="비밀번호"
        />
        <button>로그인</button>
      </form>
      <div className="flex justify-center">
        <Link href="/create-account">
          <a> 회원가입 하러 가기</a>
        </Link>
      </div>
    </>
  );
};

export default Login;
