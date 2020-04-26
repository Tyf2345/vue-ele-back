const svgCaptcha = require("svg-captcha");
const jwt = require("jsonwebtoken");
const config = require("../config/config.default");
exports.captcha = async (req, res, next) => {
  const captcha = svgCaptcha.create();
  // 存储验证码及过期时间
  req.session.captcha = {
    text: captcha.text,
    expires: +new Date() + 1000 * 60 * 10, // 过期时间
  };
  // res.type('svg');
  res.status(200).json({
    status: true,
    text: captcha.data,
    msg: "验证码更新成功",
  });
};

exports.index = async (req, res, next) => {
  const { userName, pwd, captcha } = req.query;
  const { captcha: sessionCaptcha } = req.session;

  if (!userName || !pwd) {
    return res.status(200).json({
      status: 1,
      msg: "用户名或密码不正确",
    });
  }
  if (!captcha || captcha.toLowerCase() !== sessionCaptcha.text.toLowerCase()) {
    return res.status(200).json({
      status: 1,
      msg: "请输入正确的验证码",
    });
  }
  if (+new Date() > sessionCaptcha.expires) {
    return res.status(200).json({
      status: 1,
      msg: "验证码已过期， 请刷新验证码",
    });
  }

  let encryption = jwt.sign(req.query, config.crypto.secret);
  res.cookie("user", encryption, {
    maxAge: config.rememberMeExpires,
  });

  res.status(200).json({
    status: 0,
    text: encryption,
    msg: "登陆成功",
  });
};
exports.loginOut = async (req, res) => {
  res.clearCookie("user");
  res.status(200).json({
    status: 0,
    msg: "退出成功",
  });
};
