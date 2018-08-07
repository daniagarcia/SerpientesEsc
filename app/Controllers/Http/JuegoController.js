'use strict'

class JuegoController {

    async AddUser({ params, request, response }) {
        if (!request.input('usu') || !request.input('email') || !request.input('psw') ) {
            return response.json({ status: 200, data: 'Campos vacios' })
        }
        else {
            

            const user = new User()
            user.username = request.input('usu')
            user.email = request.input('email')
            user.password = request.input('psw')

           return await user.save()
        
        }
    }
}

module.exports = JuegoController
