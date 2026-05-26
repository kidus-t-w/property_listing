import config from "../../config/default";
import jwt from "jsonwebtoken";

const privateKey = config.privateKey;
const publicKey = config.publicKey;

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey as jwt.PrivateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey as jwt.PublicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
  }
}