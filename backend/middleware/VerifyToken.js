const jwt = require('jsonwebtoken');
const { errorHandler, logging } = require('../util/responseHandler');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        const errHd = errorHandler.REQUIRE_TOKEN;
        logging(req, errHd, errHd);
        return res.status(errHd.code).json({
            name: errHd.name,
            desc_th: errHd.desc_th,
            desc_en: errHd.desc_en,
        });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            const errHd = errorHandler.EXPIRED_OR_INVALID_TOKEN;
            console.error(err);
            logging(req, errHd, errHd);
            return res.status(errHd.code).json({
                name: errHd.name,
                desc_th: errHd.desc_th,
                desc_en: errHd.desc_en,
            });
        }
        req.user = user;
        next();
    });
};

module.exports = verifyToken;