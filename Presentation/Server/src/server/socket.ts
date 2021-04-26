import socketIO = require('socket.io');
import http = require('http');

class Socket{
    private socket:socketIO.Server;
    private server:http.Server;
    
    constructor(server:http.Server){
        this.server = server;
        this.socket = new socketIO.Server(server);
    }

    getSocket() : socketIO.Server {
        return this.socket;
    }
}

export default Socket;