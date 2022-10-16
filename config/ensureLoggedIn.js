
module.exports = function (req, res, next) {
    if (!req.user) return res.status(401).json('Unauthorized'); // 401 is Unauthorized
    next(); // the next URL
}