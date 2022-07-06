import type { NextPage } from "next";
import useUser from "../libs/hooks/useUser";

const Home: NextPage = () => {
  const { user, isLoading } = useUser();
  console.log(user);
  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <h1>Welcome {user?.name}</h1>
          <h2>Your Email is: {user?.email}</h2>
        </>
      )}
    </>
  );
};

export default Home;
