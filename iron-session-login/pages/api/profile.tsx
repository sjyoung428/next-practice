import { NextApiRequest, NextApiResponse } from "next";
import db from "../../libs/db/db";
import withHandler from "../../libs/hooks/withHandler";
import withSession from "../../libs/hooks/withSession";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const profile = await db.user.findUnique({
    where: {
      id: req.session.user?.id,
    },
  });
  console.log(profile);
  res.json({
    ok: true,
    profile,
  });
};

export default withSession(
  withHandler({
    method: "GET",
    handler,
  })
);
