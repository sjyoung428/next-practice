import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const withSession = (handler: any) => {
  return withIronSessionApiRoute(handler, {
    cookieName: "logintest",
    password: "L?qh#Zx[56njRb<Pe+Wf@fmn+t=`bJDF@dfad4hjkjkeqw",
  });
};

export default withSession;
