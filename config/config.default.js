module.exports = {
  rememberMeExpires: 1000 * 60 * 60 * 24, //过期时间
  crypto: {
    alg: "RS256", //加密算法
    secret: "hello", //密钥
  },
};
