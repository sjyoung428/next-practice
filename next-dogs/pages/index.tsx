import type { NextPage } from "next";
import { useState } from "react";
import useSWR from "swr";
import Button from "../components/Button";
import Header from "../components/Header";
import Video from "../components/Video";

interface DogResponse {
  url: string;
  IsLiked: boolean;
}

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { data, mutate } = useSWR<DogResponse>(
    "https://dogs-api.nomadcoders.workers.dev"
  );
  const onToggle = () => {
    mutate((prev) => prev && { ...prev, IsLiked: !prev.IsLiked }, true);
  };
  const newDog = async () => {
    setIsLoading(true);
    await mutate();
    setIsLoading(false);
  };
  return (
    <>
      <Header />
      <div className="container">
        {data && !isLoading ? (
          <Video url={data.url} />
        ) : (
          <span>Loading...</span>
        )}
        {data && (
          <div className="btns">
            <Button newDog={newDog} />
            <Button onToggle={onToggle} likeBtn isLike={data?.IsLiked} />
          </div>
        )}
      </div>
      <style jsx global>
        {`
          .container {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top: 20px;
            border: 1px solid white;
          }
          .btns {
            display: flex;
            gap: 10px;
          }
        `}
      </style>
    </>
  );
};

export default Home;
