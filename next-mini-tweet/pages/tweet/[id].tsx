import { Tweet } from "@prisma/client";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

interface TweetResponse {
  ok: boolean;
  tweet: Tweet;
}

const TweetById = () => {
  const router = useRouter();
  if (router.query.id) {
    const { data } = useSWR<TweetResponse>(`/api/tweets/${router.query.id}`);
    return (
      <>
        <h3>{data?.tweet?.title}</h3>
        <p>{data?.tweet?.body}</p>
      </>
    );
  }
  return <div></div>;
};

export default TweetById;
