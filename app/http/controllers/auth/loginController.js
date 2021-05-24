function loginController() {
    return{
        login(req, res) {
            res.render('auth/login.ejs')
        }
    }
}

module.exports = loginController