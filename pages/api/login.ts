import type { NextApiRequest, NextApiResponse } from "next";

// fake login

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
    const request = req.body;
    const email = request.email;
    const password = request.password;

    if (email === "trunganh@gmail.com" && password === "trunganh113") {
        res.status(200).json(
            {
                status: true,
                token: "abc",
                user: {
                    id: 123,
                    userName: "Chubinbmt02",
                    email: "trunganh@gmail.com"
                }
            })
    }else {
        res.status(400).json({status: false})
    }
}