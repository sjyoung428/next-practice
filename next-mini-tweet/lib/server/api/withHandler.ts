import { NextApiRequest, NextApiResponse } from "next";

type method = "GET" | "POST" | "DELETE";

interface WithHandlerProps {
  methods: method[];
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
}

const withHandler = ({ methods, handler }: WithHandlerProps) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method && !methods.includes(req.method as any))
      return res.status(405); // GET | POST | DELETE 이 아닐 때
    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  };
};

export default withHandler; // 메소드 체크 및 에러 핸들러
