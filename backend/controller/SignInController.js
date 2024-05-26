const { GetUserByUsernameOrEmail } = require('../repositories/SignInRepositories');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;

// @desc Validate username and password
// @route POST /signin/
// @access public
const SignIn = async (req, res) => {
    const { usernameOrEmail, password } = req.body;
    console.log(usernameOrEmail, password);
    try {
        const user = await GetUserByUsernameOrEmail(usernameOrEmail);
        console.log(user);
        if (user.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const hashedPassword = user[0].password;
        const isMatch = password === hashedPassword; // Adjust this to use bcrypt if needed

        if (isMatch) {
            // Generate a token
            const token = jwt.sign(
                { id: user.id, username: user.username, email: user.email },
                SECRET_KEY,
                { expiresIn: '1min' }
            );
            res.status(200).json({ message: 'Sign in successful', token });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

module.exports = {SignIn};