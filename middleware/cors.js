const cors = async (req, res, next) => {
  //设置允许跨域响应报文头
  //设置跨域
  const { origin } = req.headers;
  //设置只有 http://127.0.0.1:5008 下发出的ajax请求才允许访问
  res.header("Access-Control-Allow-Origin", origin);

  // 设置允许的请求头
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, accept,OPTIONS, content-type,token"
  );
  // 设置允许的请求方式为所有，即 get,post,put,delete等请求方式均可
  res.header("Access-Control-Allow-Methods", "*");

  /* 需要让ajax请求携带cookie ,Access-Control-Allow-Credentials要设置为true，
那么Access-Control-Allow-Origin不能设置为*，必须设置为请求者所在的域名
 */
  res.header("Access-Control-Allow-Credentials", "true");

  // 统一设置响应给请求者的格式为json格式
  res.setHeader("Content-Type", "application/json;charset=utf-8");

  //  如果当前请求时OPTIONS 直接响应回去，不进入真正的业务逻辑方法，防止执行多次而产生
  // 主要是解决axios发出post请求时，可能会额外发出OPTIONS请求，导致执行两次业务，比如
  // 新增了两条数据到数据库里面造成业务紊乱
  if (req.method != "OPTIONS") {
    next();
  } else {
    res.end("");
  }
};
module.exports = cors