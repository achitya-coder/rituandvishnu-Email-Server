function registerController() {
    return{
        register(req, res) {
            res.render('auth/register.ejs')
        }
    }
}

module.exports = registerController