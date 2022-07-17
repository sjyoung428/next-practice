import withHandler from "@lib/server/api/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import db from "@lib/db";
import { getServerSession } from "@lib/server/getServerSession";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res);
  const { title, body } = req.body;
  if (req.method === "POST") {
    if (session?.user) {
      const user = session.user;
      const tweet = await db.tweet.create({
        data: {
          title,
          body,
          user: {
            connect: {
              email: user.email!,
            },
          },
        },
      });
      return res.json({
        ok: true,
        tweet,
      });
    }
    return res.json({
      ok: false,
    });
  }
};

export default withHandler({ methods: ["POST"], handler });
