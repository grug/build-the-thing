import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({
    randomThing: Math.floor(Math.random() * 10) + 1,
  });
};
