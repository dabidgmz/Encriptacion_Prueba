/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.post('/encrypt', 'EncryptionsController.encrypt')
  Route.post('/second_encrypt', 'EncryptionsController.second_encrypt')
  Route.post('/decrypt', 'EncryptionsController.decrypt')
  Route.post('/encryption', 'EncriptionHomeMadesController.encryption')
  Route.post('/second_encryption', 'EncriptionHomeMadesController.second_encryption')
  Route.post('/decryption', 'EncriptionHomeMadesController.decryption')
  Route.post('/Register_User', 'AuthController.register')
  Route.post('/confirm-email', 'AuthController.confirmEmail')
  Route.post('/Login_User', 'AuthController.login')
  Route.post('/Logout_User', 'AuthController.logout')
  Route.get('/Get_User', 'UsersController.index')
}).prefix('api')
