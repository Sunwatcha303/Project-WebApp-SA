const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY; // Use an environment variable in a real application

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['Authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    console.log(authHeader)

    if (!token) {
        return res.status(401).json({ message: 'Token is required' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token' });
        }
        // req.user = user; // Attach user information to the request
        next();
    });
};

module.exports = verifyToken;