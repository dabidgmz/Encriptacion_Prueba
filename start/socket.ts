import ws from "App/Services/ws"
ws.boot()

/**
 * Listen for incoming socket connections
 */
ws.io.on('connection', (socket) => {
  console.log("socket ",socket.id)
  socket.emit('news', { hello: 'world' })

  socket.on('my other event', (data) => {
    console.log(data)
  })
})