const logging = require('../util/logging');
const {errorHandler, successHandler} = require('../util/responseHandler');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

const verifyApiKey = (req, res, next) => {
    const api_key = req.headers['x-api-key'];

    if(!api_key){
        const errHd = errorHandler.REQUIRE_API_KEY;
        logging(req, errHd, errHd);
        return res.status(errHd.code).json({
            name: errHd.name,
            desc_th: errHd.desc_th,
            desc_en: errHd.desc_en,
        });
    } else if(api_key !== API_KEY){
        const errHd = errorHandler.INVALID_API_KEY;
        logging(req, errHd, errHd);
        return res.status(errHd.code).json({
            name: errHd.name,
            desc_th: errHd.desc_th,
            desc_en: errHd.desc_en,
        });
    }else{
        next();
    }
};

module.exports = verifyApiKey;