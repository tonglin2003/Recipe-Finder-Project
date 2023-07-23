
const authenticateUser = (req, res, next) => {
    if (!req.session.userId){
        return res.status(401).json({message: "You must login to view this page"});
    }
    next();
}

module.exports = authenticateUser;