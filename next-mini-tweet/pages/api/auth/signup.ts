import withHandler from "@lib/server/api/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import db from "@lib/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body: { email, name, password },
  } = req;
  const alreadyExists = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      name: true,
      email: true,
    },
  });
  if (alreadyExists) {
    return res.status(422).json({
      ok: false,
      message: "이미 존재하는 이메일 입니다",
    });
  }

  const user = await db.user.create({
    data: {
      email,
      name,
      password,
    },
  }); // password hashed 해야함
  if (user) {
    res.json({
      ok: true,
      user,
    });
  }
};

export default withHandler({ methods: ["GET", "POST"], handler });
