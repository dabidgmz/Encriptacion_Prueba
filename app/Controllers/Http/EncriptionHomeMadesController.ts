import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ws from 'App/Services/WebSocketService';
export default class EncriptionHomeMadesController {
    public async encryption({ request, response }) {
        try {
          const { text } = request.only(['text'])
          const shift = 5  
          
          let encryptedText = ''
          for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i)
            if (charCode >= 32 && charCode <= 126) {
              charCode = ((charCode - 32 + shift) % 95) + 32
            }
            
            encryptedText += String.fromCharCode(charCode)
          }
    
          Ws.io.emit('new:encryp', {
            message: "Texto encriptado",
            originalText: text,
            encryptedText: encryptedText,
          });
    
          return response.status(200).json({
            originalText: text,
            encryptedText: encryptedText,
          })
        } catch (error) {
          console.error('Error durante la encriptación:', error)
          return response.status(500).json({
            message: "Ocurrió un error durante la encriptación",
            error: error.message,
          })
        }
      }
    
            public async second_encryption({ request, response }) {
        try {
          const { text } = request.only(['text'])
          const shift = 5  
          
          let encryptedText = ''
          for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i)
            
            // Si el carácter está entre los ASCII imprimibles
            if (charCode >= 32 && charCode <= 126) {
              charCode = ((charCode - 32 + shift) % 95) + 32
            }
            
            encryptedText += String.fromCharCode(charCode)
          }
    
          Ws.io.emit('new:encrypt_second', {
            message: "Texto encriptado",
            originalText: text,
            encryptedText: encryptedText,
          });
    
          return response.status(200).json({
            originalText: text,
            encryptedText: encryptedText,
          })
        } catch (error) {
          console.error('Error durante la encriptación:', error)
          return response.status(500).json({
            message: "Ocurrió un error durante la encriptación",
            error: error.message,
          })
        }
      }
    
    
      public async decryption({ request, response }) {
        try {
          const { encryptedText } = request.only(['encryptedText'])
          const shift = 5  
          
          let decryptedText = ''
          for (let i = 0; i < encryptedText.length; i++) {
            let charCode = encryptedText.charCodeAt(i)
            if (charCode >= 32 && charCode <= 126) {
              charCode = ((charCode - 32 - shift + 95) % 95) + 32
            }
            
            decryptedText += String.fromCharCode(charCode)
          }
    
          Ws.io.emit('new:decrypt', {
            message: "Texto desencriptado",
            decryptedText: decryptedText,
          });
    
          return response.status(200).json({
            decryptedText: decryptedText,
          })
        } catch (error) {
          console.error('Error durante la desencriptación:', error)
          return response.status(500).json({
            message: "Ocurrió un error durante la desencriptación",
            error: error.message,
          })
        }
      }
}
