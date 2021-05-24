const homeController = require('../app/http/controllers/homeController.js')
const registerController = require('../app/http/controllers/auth/registerController')
const loginController = require('../app/http/controllers/auth/loginController')

function routes(app) {
    app.get('/', homeController().index)

    app.get('/register', registerController().register)
    app.get('/login', loginController().login)
}
module.exports = routes