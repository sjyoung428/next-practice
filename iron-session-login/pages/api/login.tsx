import { NextApiRequest, NextApiResponse } from "next";
import db from "../../libs/db/db";
import withHandler from "../../libs/hooks/withHandler";
import withSession from "../../libs/hooks/withSession";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const email = req.body.email;
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) return res.status(404).end();
  req.session.user = {
    id: user.id,
  };
  console.log(req.session);
  await req.session.save();
  res.json({
    ok: true,
  });
  return;
};

export default withSession(
  withHandler({
    method: "POST",
    handler,
  })
);
