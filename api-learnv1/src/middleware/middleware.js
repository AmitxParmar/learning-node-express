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
