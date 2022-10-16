const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {

    let token = req.get('Authorization') || req.query.token; // Check for the token being sent in a header or as a query parameter
    if (token) {
        token = token.replace('Bearer ', ''); // Remove the 'Bearer ' if it was included in the token header
        jwt.verify(token, process.env.SECRET, function (err, decoded) { // Check if token is valid and not expired
            req.user = err ? null : decoded.user; // If valid token, decoded will be the token's entire payload
            req.exp = err ? null : new Date(decoded.exp * 1000); // If valid token, new exp date set
            return next();
        });
    } else { // No token was sent
        req.user = null;
        return next();
    }
};