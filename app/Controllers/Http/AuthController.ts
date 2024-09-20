import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Ws from 'App/Services/WebSocketService';
export default class AuthController {
    public async login({ request, auth, response }: HttpContextContract) {
        try {
            const {email, password} = request.body();
            const token = await auth.use('api').attempt(email, password);
            return response.status(201).json({
                message: 'Usuario logueado exitosamente',
                token
            });
    
        } catch (error) {
            //console.log(error);
    
            return response.status(400).json({
                message: 'Error al loguear usuario',
            });
        }
    }

    public async logout({ auth, response }: HttpContextContract) {
        try {
            await auth.use('api').logout();
    
            return response.status(200).json({
                message: 'Cierre de sesión exitoso, Bye Bye panzona...'
            });
        } catch (error) {
            return response.status(500).json({
                message: 'Error al cerrar sesión',
            });
        }
    }
    


    public async register({auth, request, response}: HttpContextContract) {
        try {
            const {name, email, password} = request.body();
            const user = await User.create({
                name,
                email,
                password
            });
            await user.save();
            const token = await auth.use('api').attempt(email, password);
            Ws.io.emit('new:user', user)
            return response.status(201).json({
                message: 'Usuario registrado exitosamente',
                user,            
                token,
            });
    
        } catch (error) {
            //console.log(error);
    
            return response.status(400).json({
                message: 'Error al registrar usuario',
            });
        }
    }
    
}
