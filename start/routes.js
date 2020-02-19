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

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

/* ------------------- User Routes ------------------- */
Route.post('/api/register', 'UserController.register')
Route.post('/api/login', 'UserController.login')

/* ------------------ Vehicle Routes ------------------ */
Route.post('/api/vehicle', 'VehicleController.registerVehicle')
Route.get('/api/vehicle', 'VehicleController.getVehicles')
Route.get('/api/vehicle/:id', 'VehicleController.getVehicle')
Route.put('/api/vehicle/:id', 'VehicleController.updateVehicle')
Route.delete('/api/vehicle/:id', 'VehicleController.deleteVehicle')

/* ------------------ Todos Routes ------------------ */
Route.get('/api/todos', 'TodoController.getTodos')