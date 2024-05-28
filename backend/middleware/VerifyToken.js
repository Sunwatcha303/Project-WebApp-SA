const jwt = require('jsonwebtoken');
const {errorHandler, logging} = require('../util/logging');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    console.log('Token:', token);

    if (!token) {
        const errHd = errorHandler.REQUIRE_TOKEN;
            console.error(errHd);
            return res.status(errHd.code).json({
                name: errHd.name,
                desc_th: errHd.desc_th,
                desc_en: errHd.desc_en,
            });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            const errHd = errorHandler.EXPIRED_OR_INVALID_TOKEN;
            console.error(err, errHd);
            return res.status(errHd.code).json({
                name: errHd.name,
                desc_th: errHd.desc_th,
                desc_en: errHd.desc_en,
            });
        }
        console.log('User info:', user);
        req.user = user;
        next();
    });
};

module.exports = verifyToken;