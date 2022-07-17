import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

interface FormState {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<FormState>();
  const { data, status } = useSession();
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
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", {
            required: true,
          })}
          type="email"
          placeholder="이메일"
        />
        <input
          {...register("password", {
            required: true,
          })}
          type="password"
          placeholder="비밀번호"
        />
        <button>로그인</button>
      </form>
    </>
  );
};

export default Login;
