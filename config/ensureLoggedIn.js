module.exports = function (req, res, next) {
    // 401 is Unauthorized
    if (!req.user) return res.status(401).json('Unauthorized');
    // the next URL
    next();
}