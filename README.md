
### 前言
  这是vue后台管理系统对应的后台部分(持续更新中)
  - 目前 登录/登出、首页卡片、icon图标、表格分页/模糊查询 接口已经完成

### demo: [传送阵](http://114.215.147.221:8087)

### 技术栈

  ```js
    Express + Mongoose + svg-captcha + jsonwebtoken + express-session
  ```

  ### 启动项目注意事项

  - mongoose (开启状态)
  - node版本 > 6.0

  ### 项目运行

  ```js
  git clone https://github.com/Tyf2345/vue-ele-back.git
  cd vue-ele-back
  yarn install
  yarn dev
  访问: http://localhost:3001
  ```



### 说明

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  如有问题请直接在 Issues 中提

>  部署环境 阿里云 ubuntu16.04 

>   接口返回状态  sataus <br/>
    0 : 成功  <br/>
    1 : 请求字段不正确 <br/>
    2 : 无效的token <br/>

>  项目地址[前端Vue项目地址](https://github.com/Tyf2345/vue-admin-ele)、[后台node接口地址](https://github.com/Tyf2345/vue-ele-back)


### 结构目录

├── config                                      // 配置文件，过期时间、密钥等 <br/>
├── controller                                  // 接口对应的核心业务代码 <br/>
├── db_data                                     // 测试数据、启动Mongoose相关 <br/>
├── middleware                                  // 中间件 <br/>
├── models                                      // 数据库 表(集合)结构 <br/>
├── pubic                                       // 静态文件 <br/>
├── routes                                      // 路由相关 <br/>
├── utils                                       // 工具类 <br/>
├── app.js                                      // 入口文件， 加载各种模块 <br/>
