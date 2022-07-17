import useMutation from "@lib/hooks/useMutation";
import React from "react";
import { useForm } from "react-hook-form";

interface FormState {
  title: string;
  body: string;
}

const Write = () => {
  const [writeTweet] = useMutation("/api/tweets/write");
  const { register, handleSubmit } = useForm<FormState>();
  const onValid = (formData: FormState) => {
    writeTweet(formData);
  };
  return (
    <>
      <h1 className="text-center">트윗 쓰기</h1>
      <form
        className="flex flex-col items-center "
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("title", {
            required: true,
          })}
          className="border border-black"
          type="text"
          placeholder="제목"
        />
        <input
          {...register("body", {
            required: true,
          })}
          className="border border-black"
          type="text"
          placeholder="내용을 입력하시오"
        />
        <button>트윗 작성하기</button>
      </form>
    </>
  );
};

export default Write;
