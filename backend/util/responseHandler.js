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
    SERVER_ERROR: responseHandler.log(500, 'SERVER_ERROR', 'ข้อผิดพลาดของเซิร์ฟเวอร์', 'Server error'),

    INVALID_USERNAME_OR_PASSWORD: responseHandler.log(401, 'INVALID_USERNAME_OR_PASSWORD', 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง', 'Invalid username or password'),
    DUPLICATE_USERNAME_OR_EMAIL: responseHandler.log(401, 'DUPLICATE_USERNAME_OR_EMAIL', 'ชื่อผู้ใช้หรืออีเมลนี้มีคนใช้ไปแล้ว', 'Duplicate username or email'),

    REQUIRE_API_KEY: responseHandler.log(400, 'REQUIRE_API_KEY', 'ต้องการ api key', 'Require api key'),
    INVALID_API_KEY: responseHandler.log(401, ' INVALID_API_KEY', 'Api key ไม่ถูกต้อง', 'Invalid api key'),
};

const successHandler = {
    SIGNIN_SUCCESSFUL: responseHandler.log(200, 'SIGNIN_SUCCESSFUL', 'เข้าสู่ระบบสำเร็จ', 'Sign-in successful'),
    SIGNUP_SUCCESSFUL: responseHandler.log(200, 'SIGNUP_SUCCESSFUL', 'สมัครสมาชิกสำเร็จ', 'Sign-up successful'),
    
    HEALTHY_SERVER: responseHandler.log(200, 'HEALTHY_SERVER', 'ระบบทำงานปกติ', 'Healthy server'),

    ADDED_MOVIE: responseHandler.log(201, 'ADDED_MOVIE', 'เพิ่มหนังแล้ว', 'Added movie'),
    UPDATED_MOVIE: responseHandler.log(200, 'UPDATED_MOVIE', 'อับเดทหนังแล้ว', 'Updated movie'),
    DELETED_MOVIE: responseHandler.log(204, 'DELETED_MOVIE', 'ลบหนังแล้ว', 'Deleted movie'),
}

module.exports = {errorHandler, successHandler};