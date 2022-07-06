import { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useMutation from "../libs/hooks/useMutation";

interface IForm {
  email: string;
  name: string;
}

const Create: NextPage = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const [create, { data }] = useMutation("/api/create");
  const router = useRouter();

  const onValid = (formData: IForm) => {
    create(formData);
    alert("Account Created! Plz Login");
    router.push("/log-in");
  };
  console.log(data);
  return (
    <>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <label htmlFor="name">Name: </label>
        <input {...register("name")} id="name" type="text" />
        <br />
        <label htmlFor="email">Email: </label>
        <input {...register("email")} id="email" type="email" />
        <br />
        <button>Create Account</button>
      </form>
    </>
  );
};

export default Create;
