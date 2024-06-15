const logging = require('../util/logging');
const { successHandler } = require('../util/responseHandler');
// @desc Check health
// @route GET /health/
// @access public
const Health = async (req, res) => {
    const log = successHandler.HEALTHY_SERVER;
    logging(req, log, null);
    return res.status(log.code).json(null);
}

module.exports = { Health };