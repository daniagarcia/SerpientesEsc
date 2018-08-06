'use strict'
const Route = use('Route')
const Database = use('Database')
const User = use('App/Models/User')
const Token = use('App/Models/Token')

class DatoController {
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
    async Login({ params, request, response,auth }) {
        if (!request.input('usu') || !request.input('psw') ) {
            return response.json({ status: 200, data: 'Campos vacios' })
        }
        else {
            return { 
                sesion: await auth
                    .withRefreshToken()
                    .attempt(request.input('usu'), request.input('psw')),
                user: await User
                    .query()
                    .where('username',request.input('usu'))
                    .first()
            }
        }
    }
}


module.exports = DatoController
