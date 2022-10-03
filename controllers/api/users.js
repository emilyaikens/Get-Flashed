const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

async function create(req, res) {
    try {
        const user = await User.create(req.body);
        const token = createJWT(user);
        return res.json(token);
    } catch (error) {
        res.status(400).json(error);
    }
}

function createJWT(user) {
    return jwt.sign(
        {user},
        process.env.SECRET,
        {expiresIn: '24h'}
    );
}

async function login(req, res) {
    try {
        // first fine the user
        const user = await User.findOne({email: req.body.email});
        // if there is no user in the throw an error
        if (!user) throw new Error();
        // get user submitted password, and compare with the object found on the db
        // apple, HSH3ychs
        const match = await bcrypt.compare(req.body.password, user.password);
        // no, match? send error
        if (!match) throw new Error();
        // there is a match! we found the user
        // create, and return the token
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        // something went wrong, send status 400 error
        res.status(400).json('Bad Credentials');
    }
}

function checkToken(req, res) {
    console.log('req.user', req.user);
    res.json(req.exp);
}

module.exports = {
    create,
    login,
    checkToken
};