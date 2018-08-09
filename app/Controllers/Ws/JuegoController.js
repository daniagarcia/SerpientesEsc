'use strict'

class JuegoController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }
      onMessage(message){
        this.socket.broadcast("message",message);
    }

    onOpen(message){
        this.socket.broadcast("message",message);
    }

    onClose(message){
        this.socket.broadcast("message",message);
    }
    
    onPartida(message){
        this.socket.broadcast("partida",message);
    }

}

module.exports = JuegoController
