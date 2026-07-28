export default {
    // 登陆、登出
    Login: "auth/api/username/token",
    verifyCode: '/auth/v1/pub/imgVerify/imgCode',  //登录验证码
    logOut: 'auth/logout',
    // 注册
    register: {
        getReg: "/user/register/shipper", // 提交注册信息
        code: "/auth/sms/code", // 注册获取验证码
        getCodeList: "/auth/sms/list", // 获取验证码列表
    },

    // 首页
    Index: {
        index: "/index/index",
    },
};