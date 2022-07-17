import withHandler from "@lib/server/api/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import db from "@lib/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  if (id) {
    const tweet = await db.tweet.findUnique({
      where: {
        id: Number(id.toString()),
      },
    });
    res.json({
      ok: true,
      tweet,
    });
  }
};

export default withHandler({ methods: ["GET"], handler });
