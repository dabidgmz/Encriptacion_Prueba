import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import Hash from '@ioc:Adonis/Core/Hash'
import crypto from 'crypto'
import Ws from 'App/Services/WebSocketService';
const algorithm = 'aes-256-cbc'; // Algoritmo de cifrado
const key = crypto.randomBytes(32); // Clave de 32 bytes (256 bits)
const iv = crypto.randomBytes(16);  // Vector de inicialización de 16 bytes

export default class EncryptionsController {
  public async encrypt({ request, response }: HttpContextContract) {
    try {
      const { text } = request.only(['text'])
  
      const cipher = crypto.createCipheriv(algorithm, key, iv)
      let encrypted = cipher.update(text, 'utf8', 'hex')
      encrypted += cipher.final('hex')
  
      const encryptedData = iv.toString('hex') + ':' + encrypted
      Ws.io.emit('new:encryp', {
        message: "Texto encriptado",
        originalText: text,
        encryptedText: encryptedData,
      });
      
      return response.status(200).json({
        originalText: text,
        encryptedText: encryptedData,
      })
    } catch (error) {
      console.error('Error durante la encriptación:', error)
      return response.status(500).json({
        message: "Ocurrió un error durante la encriptación",
        error: error.message,
      })
    } finally {
      console.log('Proceso de encriptación completado')
    }
  }
  


  public async decrypt({ request, response }: HttpContextContract) {
    try {
      const { encryptedText } = request.only(['encryptedText'])
  
      const [ivHex, encrypted] = encryptedText.split(':')
      const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(ivHex, 'hex'))
  
      let decrypted = decipher.update(encrypted, 'hex', 'utf8')
      decrypted += decipher.final('utf8')
  
      return response.status(200).json({
        decryptedText: decrypted,
      })
    } catch (error) {
      console.error('Error durante la desencriptación:', error)
      return response.status(500).json({
        message: "Ocurrió un error durante la desencriptación",
        error: error.message,
      })
    } finally {
      console.log('Proceso de desencriptación completado')
    }
  }
  
    


      /*
      Cifrado (encrypt)
        Recibe el texto: El método encrypt toma el texto que quieres cifrar. Esto lo hace recibiéndolo a través de una petición HTTP que envía el texto en un formato JSON.

        Crear un "cipher": Aquí usamos el algoritmo AES-256-CBC, que es un estándar de cifrado muy seguro. Para hacer esto, generamos una clave secreta de 32 bytes y un IV (vector de inicialización) de 16 bytes. Estos dos son esenciales para cifrar el texto de manera segura.

        Convertir el texto a cifrado: El texto se transforma en un galimatías (código hexadecimal) que no tiene sentido a simple vista. Esto se hace en dos pasos: primero, se cifra una parte del texto con cipher.update(), y luego se cierra el cifrado con cipher.final().

        Empaquetar el resultado: El resultado de la encriptación es el texto cifrado y el IV, que se guardan en una cadena con el formato IV:TextoEncriptado (los dos separados por dos puntos).

        Devolver el resultado: Finalmente, la API responde con el texto original y el texto encriptado en formato JSON, para que lo puedas usar o almacenar.

        Ejemplo de lo que haría:
        Texto original: "Hola mundo"
        Texto cifrado: Algo como "b7e23ec1...b3e4ff3"
    
    Desencriptado (decrypt)
        Recibe el texto encriptado: El método decrypt toma el texto cifrado que antes generaste, de nuevo a través de una petición HTTP en formato JSON.

        Separar el IV del texto cifrado: Como el IV y el texto cifrado están juntos y separados por dos puntos (IV:TextoEncriptado), lo primero que hace el código es dividirlos en dos partes: el IV por un lado y el texto cifrado por el otro.

        Crear un "decipher": Usamos el mismo algoritmo de cifrado (AES-256-CBC) y la misma clave secreta para crear un "decipher" (desencriptador), pero esta vez le pasamos el IV que recuperamos de la cadena encriptada.

        Desencriptar: Ahora el "decipher" hace lo inverso: toma el texto cifrado y lo convierte de nuevo al texto original utilizando decipher.update() y decipher.final().

        Devolver el texto original: Al final, devuelve el texto original en la respuesta JSON para que sepas cuál era el contenido antes de que fuera encriptado.

        Ejemplo de lo que haría:
        Texto encriptado: "b7e23ec1...b3e4ff3"
        Texto desencriptado: "Hola mundo"
      */
}
