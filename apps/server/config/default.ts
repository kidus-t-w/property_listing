require("dotenv").config()

export default {
  port: 1337,
  saltWorkFactor: 10,
  accessTokenTtl: process.env.ACCESS_TOKEN_TTL || "1h",
  refreshTokenTtl: process.env.REFRESH_TOKEN_TTL || "7d",
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
};
