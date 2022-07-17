import withHandler from "@lib/server/api/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import db from "@lib/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const tweets = await db.tweet.findMany({
    include: {
      _count: {
        select: {
          like: true,
        },
      },
    },
  });
  return res.json({
    ok: true,
    tweets,
  });
};

export default withHandler({
  methods: ["GET"],
  handler,
});
