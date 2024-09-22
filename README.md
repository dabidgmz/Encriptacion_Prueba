Aquí tienes el README actualizado con emojis en texto plano:

---

# Encriptacion_Prueba 🔐💻

**Encriptacion_Prueba** es un proyecto desarrollado con **AdonisJS 5** como backend, cuyo objetivo es implementar un sistema de chat virtual con encriptación AES-256-CBC para asegurar la privacidad de los mensajes, además de autenticación de usuarios y registro. Se utilizan **WebSockets**, **API REST**, emojis y colores para mejorar la experiencia del usuario.

## Descripción del Proyecto ✨📝

El proyecto consiste en un chat virtual donde los mensajes se encriptan usando el siguiente algoritmo:

```javascript
const algorithm = 'aes-256-cbc'; // Algoritmo de cifrado
const key = crypto.randomBytes(32); // Clave de 32 bytes (256 bits)
const iv = crypto.randomBytes(16);  // Vector de inicialización de 16 bytes
```

### Características 🛠️:

- **AdonisJS 5** como framework backend.
- **Cifrado AES-256-CBC** para mensajes, garantizando la seguridad en la comunicación 🔒.
- **WebSockets** implementados con **Socket.IO** para la comunicación en tiempo real 📡.
- **Autenticación** con JWT tokens para gestionar sesiones de usuario 🔑.
- **Registro de usuarios** para permitir la creación de cuentas y acceso a las funcionalidades del chat 📝.
- **API REST** para manejar el flujo de datos 🌐.
- Uso de **emojis** y **colores** para una mejor experiencia visual 🎨.

## Tecnologías Utilizadas 💻

- **AdonisJS 5**
- **Node.js**
- **Socket.IO**
- **Crypto** (para la encriptación)
- **JWT** (para autenticación)
- **REST APIs**
- **WebSockets**


## Uso 🚀

1. Regístrate o inicia sesión con un usuario.
2. Accede al chat y comienza a enviar mensajes ✉️.
3. Los mensajes se encriptarán y se transmitirán a través de WebSockets en tiempo real 📡.
4. Disfruta de la interacción con emojis y colores para una experiencia enriquecida 🎉.

## Colaboradores 🤝

- **@DarioRamosTec** - Darío Ramos [Colaborador](https://github.com/DarioRamosTec)
- **@ReneArteaga22** - Rene Arteaga [Colaborador](https://github.com/ReneArteaga22) _*Invitación pendiente*_
- **@RicargoGGx** - RicardoGGx [Colaborador](https://github.com/RicargoGGx)

---

Este README ahora tiene emojis que resaltan las secciones clave, haciendo el documento más atractivo. ¡Espero que te guste!
