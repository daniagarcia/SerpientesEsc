'use strict'
const Database = use('Database') 

/**
 * Resourceful controller for interacting with jugadores
 */
class JugadoreController {
  /**
   * Show a list of all jugadores.
   * GET jugadores
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new jugadore.
   * GET jugadores/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new jugadore.
   * POST jugadores
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single jugadore.
   * GET jugadores/:id
   */
  async show ({ params, request, response, view }) {

    return await Database.select('ganadas,perdidas').from('users').where('usuarios','=', params.id)
    
  }

  /**
   * Render a form to update an existing jugadore.
   * GET jugadores/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update jugadore details.
   * PUT or PATCH jugadores/:id
   */
  async update ({ params, request, response }) {

  if(params.action=='ganadas'){

    await Database.table('users').where('usuarios','=', params.id).update('ganadas','ganadas+1')
  

  }else if(params.action=='perdidas'){
    
    await Database.table('users').where('usuarios','=', params.id).update('perdidas','perdidas+1')
    
  }

    
  }

  /**
   * Delete a jugadore with id.
   * DELETE jugadores/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = JugadoreController
