import { NextApiRequest, NextApiResponse } from "next";
import db from "../../libs/db/db";
import withHandler from "../../libs/hooks/withHandler";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email } = req.body;
  await db.user.create({
    data: {
      name,
      email,
    },
  });
  return res.json({
    ok: true,
  });
};

export default withHandler({
  method: "POST",
  handler,
});
