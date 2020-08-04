import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    randomThing: Math.floor(Math.random() * 100) + 1,
  });
};
