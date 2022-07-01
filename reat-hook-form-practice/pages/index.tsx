import type { NextPage } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  name: string;
  email: string;
  password: string;
}

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IForm>({
    mode: "onChange",
  });
  const [validMessage, setValidMessage] = useState("");

  const onValid = () => {
    setValidMessage("Thank you.");
  };
  const onInValid = () => {
    setValidMessage("");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            {...register("name", {
              required: "Please write down your name",
            })}
            type="text"
            id="name"
          />
          <span>{errors.name?.message}</span>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: "Please wrtie down your email",
              validate: (email) =>
                email.includes("@naver.com") || "Only @naver emails allowed",
            })}
            type="email"
            id="email"
            placeholder="Only @naver.com"
          />
          <span>{errors.email?.message}</span>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            {...register("password", {
              required: "Please write down your password",
              minLength: {
                value: 10,
                message: "Password has to be more than 10 chars",
              },
            })}
            type="password"
            id="password"
            placeholder="Min 10 characters"
          />
          <span>{errors.password?.message}</span>
        </div>
        <button>Log in</button>
        <div>{isValid && <span>{validMessage}</span>}</div>
      </form>
    </>
  );
};

export default Home;
