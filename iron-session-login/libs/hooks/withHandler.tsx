import { NextApiRequest, NextApiResponse } from "next";

interface IHandler {
  method: "GET" | "POST";
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
}

const withHandler = ({ method, handler }: IHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (method !== method) return res.status(405);

    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  };
};

export default withHandler;
