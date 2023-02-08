import { verify } from "jsonwebtoken";

export default function fetchProfile(req, res) {
  // const { myTokenName } = req.cookies;
  console.log("este es req", req);

  try {
    if (!myTokenName) {
      return false;
    }
    const user = verify(myTokenName, process.env.NEXT_PUBLIC_JWT_SECRET_KEY);

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      lastName: user.lastName,
      typeUser: user.typeUser,
    };
  } catch (error) {
    return { error: "invalid Token" };
  }
}
