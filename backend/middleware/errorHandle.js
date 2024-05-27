const errorHandle = {
    error: function(code, desc_th, desc_en) {
        return {
            code,
            desc_th,
            desc_en,
        };
    }
};

const error = {
    EXPIRED_OR_INVALID_TOKEN: errorHandle.error(401, 'token ไม่ถูกต้องหรือหมดอายุ', 'Expired or invalid token'),
    REQUIRE_TOKEN: errorHandle.error(400, 'ต้องการ token', 'Require token'),
};

module.exports = error;