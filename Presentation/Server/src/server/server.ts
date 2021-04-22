import express = require('express');

class Server{

    private app:express.Application;
    private port:number;
    private ip:string;

    constructor(port:number,ip:string){
        this.app = express();
        this.port = port;
        this.ip = ip;
    }

    //get app
    public getApp(){
        return this.app
    }

    //metodo para arrancar el sercidor
    start(){
        this.app.listen(this.port,this.ip)
    }

    //metodo para inicializar el servidor
    static init(port:number,ip:string) : Server{
        return new Server(port,ip);
    }

}

export default Server;