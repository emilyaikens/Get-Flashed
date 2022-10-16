const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

//create a token-based user using signup form body
    async function create(req, res) {
        try {
            const user = await User.create(req.body);
            const token = createJWT(user);
            return res.json(token);
        } catch (error) {
            res.status(400).json(error);
        }
    }

//create a token for user that expires in 24 hours
    function createJWT(user) {
        return jwt.sign(
            {user},
            process.env.SECRET,
            {expiresIn: '24h'}
        );
    }

//find user by email. get user submitted password, and compare with the object found on the db
    async function login(req, res) {
        try {
            const user = await User.findOne({email: req.body.email});
            if (!user) throw new Error();
            const match = await bcrypt.compare(req.body.password, user.password);
            if (!match) throw new Error();
            const token = createJWT(user);
            res.json(token);
        } catch (err) {
            res.status(400).json('Bad Credentials');
        }
    }

//send expiry
    function checkToken(req, res) {
        console.log('req.user', req.user);
        res.json(req.exp);
    }

module.exports = {
    create,
    login,
    checkToken
};