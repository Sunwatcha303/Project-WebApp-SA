// @desc Check health
// @route GET /health/
// @access public
const Health = async (req, res) => {
    return res.status(200).json(null);
}

module.exports = { Health };