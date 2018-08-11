'use strict'
const Route = use('Route')
const Database = use('Database')
const User = use('App/Models/User')
const Token = use('App/Models/Token')

class DatoController {


    async agregarGanadasPerdidas({ params, request, response,auth}){
        if(params.action =='ganadas'){
            await Database.table('users').where('usuarios',params.id).update('ganadas','ganadas+1')
        }else if(params.action =='perdidas'){
            await Database.table('users').where('usuarios',params.id).update('perdidas','perdidas+1')        
      }
}
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

    // mostrarestadisticas({params, request, response}){
    //     // return await Database.select('ganadas,perdidas').from('users').where('usuarios','=',params.id)
    // }



   
}


module.exports = DatoController
