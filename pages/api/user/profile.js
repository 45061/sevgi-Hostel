import { verify } from "jsonwebtoken";

export default function profileHandler(req, res) {
  const { myTokenName } = req.cookies;

  try {
    if (!myTokenName) {
      return res.status(200).json(false);
    }
    const user = verify(myTokenName, process.env.NEXT_PUBLIC_JWT_SECRET_KEY);

    return res.json({
      id: user.id,
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      typeUser: user.typeUser,
    });
  } catch (error) {
    return res.status(401).json({ error: "invalid Token" });
  }
}
