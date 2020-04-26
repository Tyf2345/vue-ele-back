module.exports = async (req, res, next) => {
  const { pathname } = req._parsedOriginalUrl;
  const { user } = req.cookies;
  const { token } = req.headers;
  // 判断token状态
  if (pathname === "/login/index" || pathname === "/login/captcha") {
    next();
  } else {
    if (user && token && user === token) {
      next();
    } else {
      return res.status(200).json({
        status: 2,
        msg: "无效的token，请重新登陆",
      });
    }
  }
};
