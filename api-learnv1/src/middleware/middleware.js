const authControl = (req, res, next) => {
    const isToken = true
    if (isToken) {
        next()
    } else {
        res.json({
            success: false,
            message: "No token provided!"
        })
    }
}

const banControl = (req, res, next) => {
    const isBanned = false;
    if (isBanned) {
        res.json({
            success: false,
            message: "You are banned user!"
        })
    } else {
        next();
    }
}

const homeControl = (req, res, next) => {
    console.log("Home control")
    next();
}

module.exports = {
    authControl,
    banControl,
    homeControl,
}