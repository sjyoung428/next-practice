import useMutation, { MutationResponse } from "@lib/hooks/useMutation";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

interface FormState {
  name: string;
  email: string;
  password: string;
}

const CreateAccount = () => {
  const router = useRouter();
  const [signup, { data }] = useMutation<MutationResponse>("/api/auth/signup");
  const { register, handleSubmit } = useForm<FormState>();
  useEffect(() => {
    if (data && data.ok === true) {
      router.push("/log-in");
    }
  }, [data?.ok, router]);
  const onValid = (formData: FormState) => {
    signup(formData);
  };

  return (
    <>
      <h1 className="text-center">회원가입 하기</h1>
      <form
        onSubmit={handleSubmit(onValid)}
        className="flex flex-col items-center "
      >
        <input
          {...register("name", {
            required: true,
          })}
          className="border border-black"
          type="text"
          placeholder="이름"
        />
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
        <button>가입하기</button>
      </form>
      <div className="flex justify-center">
        <Link href="/log-in">
          <a>로그인 하러 가기</a>
        </Link>
      </div>
    </>
  );
};

export default CreateAccount;
