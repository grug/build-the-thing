import { NextApiRequest, NextApiResponse } from "next";

type MyResopnseType = {
  randomThing: number;
};

export default (req: NextApiRequest, res: NextApiResponse<MyResopnseType>) => {
  return res.status(200).json({
    randomThing: Math.floor(Math.random() * 10) + 1,
  });
};
