import { NextApiRequest, NextApiResponse } from "next/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get data submitted in request's body.
  const body = req.body;

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.name || !body.age) {
    // Sends a HTTP bad request error code
    return res.status(200).json({ data: "Dmitry 33" });
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `${body.name} ${body.age}` });
}
