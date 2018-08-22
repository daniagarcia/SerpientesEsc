'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

// Route.on('/').render('welcome')
// Route.on('/chat').render('chat')
Route.on('/').render('welcome')

Route.post('/insertarUser','DatoController.AddUser');
Route.post('/','DatoController.Login');
Route.post('/estadisticas','DatoController.agregarGanadasPerdidas');
Route.post('/mostrar','DatoController.mostrarestadisticas');
//Route.post('/estadisticas','DatoController.agregarGanadasPerdidas').middleware(['auth']);


