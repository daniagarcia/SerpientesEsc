'use strict'
const Route = use('Route')
const Database = use('Database')
const User = use('App/Models/User')
const Token = use('App/Models/Token')

class DatoController {

    
    async agregarGanadasPerdidas({ params, request, response, auth }) {
        
        if(request.input('accion') == 'ganar'){
            const usuario = await User.find(request.input('id'))
            console.log(usuario)
            usuario.ganadas = usuario.ganadas + 1
            await usuario.save()
            console.log(usuario)
        }else if(request.input('accion') == 'perder '){
            const usuario = await User.find(request.input('id'))
            console.log(usuario)
            usuario.perdidas = usuario.perdidas + 1
            await usuario.save()
            console.log(usuario)

        }
        // if (params.action == request.input('accion')) {
        //     await Database.table('users').where('id', request.input('id')).update('ganadas','ganadas+1')
        // } else if (params.action == request.input('accion')) {
        //     await Database.table('users').where('id', request.input('id')).update('perdidas','perdidas+1')
        // }
    }

    async mostrarestadisticas({ params, request, response,auth }) {
        return {
                 user: await User
                .query()
                .where('id', request.input('id'))
                .first()
        }
        console.log(request.input('id'))
        // return await Database.select('ganadas','perdidas').from('users').where('id', '=',request.input('id'))
    }

    async AddUser({ params, request, response }) {
        if (!request.input('usu') || !request.input('email') || !request.input('psw')) {
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
    async Login({ params, request, response, auth }) {
        if (!request.input('usu') || !request.input('psw')) {
            return response.json({ status: 200, data: 'Campos vacios' })
        }
        else {
            // var usuario 
            // var  sesion 

            //  var object = {
            //      usuario:usuario,
            //      sesion:sesion
            //  }
            //  try{
            //      usuario =  await User.query().where('username', request.input('usu')).first()
            //      sesion =  await auth.withRefreshToken().attempt(request.input('usu'), request.input('psw'))
            //      object.usuarios = usuario
                 
            //  }catch(e){

            //  }finally{
            //     return object;
            //  }
            
            return {
                sesion: await auth
                    .withRefreshToken()
                    .attempt(request.input('usu'), request.input('psw')),
                user: await User
                    .query()
                    .where('username', request.input('usu'))
                    .first()
            }
        }
    }





}


module.exports = DatoController
