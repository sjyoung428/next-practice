import { Tweet } from "@prisma/client";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

interface TweetWithLike extends Tweet {
  _count: {
    like: number;
  };
}
interface TweetsResponse {
  ok: boolean;
  tweets: TweetWithLike[];
}

export default () => {
  const { data } = useSWR<TweetsResponse>("/api/tweets");
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {data?.tweets?.map((tweet) => (
          <li key={tweet.id}>
            <Link href={`/tweet/${tweet.id}`}>
              <a>{tweet.title}</a>
            </Link>
            <span>{tweet._count.like}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
