const { GetUserByUsernameOrEmail, AddUser } = require('../repositories/UsersRepositories');
const logging = require('../util/logging')
const { errorHandler, successHandler } = require('../util/responseHandler');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY;

// @desc Validate username and password
// @route POST /user/signin/
// @access public
const SignIn = async (req, res) => {
    const { usernameOrEmail, password } = req.body;
    console.log(usernameOrEmail, password);
    try {
        const user = await GetUserByUsernameOrEmail(usernameOrEmail, usernameOrEmail);
        if (!user) {
            const errHd = errorHandler.INVALID_USERNAME_OR_PASSWORD;
            logging(req, errHd, errHd);
            return res.status(errHd.code).json({
                name: errHd.name,
                desc_th: errHd.desc_th,
                desc_en: errHd.desc_en,
            });
        }

        const hashedPassword = user.password;
        // const isMatch = password === hashedPassword; // Adjust this to use bcrypt if needed
        const isMatch = await bcrypt.compare(password, hashedPassword);

        if (isMatch) {
            // Generate a token
            const token = jwt.sign(
                { id: user.id, username: user.username, email: user.email },
                SECRET_KEY,
                { expiresIn: '5d' }
            );
            const log = successHandler.SIGNIN_SUCCESSFUL;
            logging(req, log, token);
            return res.status(log.code).json({
                name: log.name,
                desc_th: log.desc_th,
                desc_en: log.desc_en,
                token,
            });
        } else {
            const errHd = errorHandler.INVALID_USERNAME_OR_PASSWORD;
            logging(req, errHd, errHd);
            return res.status(errHd.code).json({
                name: errHd.name,
                desc_th: errHd.desc_th,
                desc_en: errHd.desc_en,
            });
        }
    } catch (err) {
        const errHd = errorHandler.SERVER_ERROR;
        console.error(err);
        logging(req, errHd, errHd);
        return res.status(errHd.code).json({
            name: errHd.name,
            desc_th: errHd.desc_th,
            desc_en: errHd.desc_en,
        });
    }
};

// @desc Add user
// @route POST /user/signup/
// @access public
const SignUp = async (req, res) => {
    const { username, fullname, email, password } = req.body;

    try {
        const user = await GetUserByUsernameOrEmail(username, email);
        if (user) {
            const errHd = errorHandler.DUPLICATE_USERNAME_OR_EMAIL;
            logging(req, errHd, errHd);
            return res.status(errHd.code).json({
                name: errHd.name,
                desc_th: errHd.desc_th,
                desc_en: errHd.desc_en,
            });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Add user to the database
        const newUser = await AddUser(username, fullname, email, hashedPassword);

        // Generate a token
        const token = jwt.sign(
            { id: newUser.id, username: newUser.username, email: newUser.email },
            SECRET_KEY,
            { expiresIn: '5d' }
        );

        const log = successHandler.SIGNUP_SUCCESSFUL;
        logging(req, log, token);
        return res.status(log.code).json({
            name: log.name,
            desc_th: log.desc_th,
            desc_en: log.desc_en,
            token,
        });
    } catch (err) {
        const errHd = errorHandler.SERVER_ERROR;
        console.error(err);
        logging(req, errHd, errHd);
        return res.status(errHd.code).json({
            name: errHd.name,
            desc_th: errHd.desc_th,
            desc_en: errHd.desc_en,
        });
    }
};

module.exports = { SignIn, SignUp };