const jwt = require('jsonwebtoken');
const errorHandle = require('./errorHandle');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    console.log('Token:', token);

    if (!token) {
        return res.status(errorHandle.REQUIRE_TOKEN.code).json({ 
            desc_th: errorHandle.REQUIRE_TOKEN.desc_th, 
            desc_en: errorHandle.REQUIRE_TOKEN.desc_en 
        });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            console.error('Token verification error:', err);
            return res.status(errorHandle.EXPIRED_OR_INVALID_TOKEN.code).json({ 
                desc_th: errorHandle.EXPIRED_OR_INVALID_TOKEN.desc_th, 
                desc_en: errorHandle.EXPIRED_OR_INVALID_TOKEN.desc_en 
            });
        }
        console.log('User info:', user);
        req.user = user;
        next();
    });
};

module.exports = verifyToken;