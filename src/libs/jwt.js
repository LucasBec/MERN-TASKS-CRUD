import jwt from "jsonwebtoken";

export function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    //Generar JWT
    jwt.sign(
      payload,
      process.env.SECRET_KEY,
      {
        expiresIn: "30d",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}
