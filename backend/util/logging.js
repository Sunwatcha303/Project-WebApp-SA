const responseHandler = {
    log: function(code, name, desc_th, desc_en) {
        return {
            code,
            name,
            desc_th,
            desc_en,
        };
    }
    
};

const errorHandler = {
    EXPIRED_OR_INVALID_TOKEN: responseHandler.log(401, 'EXPIRED_OR_INVALID_TOKEN', 'token ไม่ถูกต้องหรือหมดอายุ', 'Expired or invalid token'),
    REQUIRE_TOKEN: responseHandler.log(400, 'REQUIRE_TOKEN', 'ต้องการ token', 'Require token'),

    MOVIE_NOT_FOUND: responseHandler.log(404, 'MOVIE_NOT_FOUND','ไม่พบภาพยนตร์', 'Movie not found'),
    SERVER_log: responseHandler.log(500, 'SERVER_log', 'ข้อผิดพลาดของเซิร์ฟเวอร์', 'Server log'),

    INVALID_USERNAME_OR_PASSWORD: responseHandler.log(401, 'INVALID_USERNAME_OR_PASSWORD', 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง', 'Invalid username or password'),
    DUPLICATE_USERNAME_OR_EMAIL: responseHandler.log(401, 'DUPLICATE_USERNAME_OR_EMAIL', 'ชื่อผู้ใช้หรืออีเมลนี้มีคนใช้ไปแล้ว', 'Duplicate username or email'),
};

const logging = {
    SIGNIN_SUCCESSFUL: responseHandler.log(200, 'SIGNIN_SUCCESSFUL', 'เข้าสู่ระบบสำเร็จ', 'Sign-in successful'),
    SIGNUP_SUCCESSFUL: responseHandler.log(200, 'SIGNUP_SUCCESSFUL', 'สมัครสมาชิกสำเร็จ', 'Sign-up successful'),
}

module.exports = {errorHandler, logging};