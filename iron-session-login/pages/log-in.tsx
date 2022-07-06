import { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useMutation from "../libs/hooks/useMutation";

interface IForm {
  email: string;
}

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const [login, { data }] = useMutation("/api/login");
  const router = useRouter();
  const onValid = (formData: IForm) => {
    login(formData);
    router.push("/");
  };
  console.log(data);
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <label htmlFor="email">Email: </label>
        <input {...register("email")} type="text" />
        <br />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
