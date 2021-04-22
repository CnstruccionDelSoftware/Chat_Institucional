//import logindto from './logindto';
const socket = (window as any).io("192.168.0.101:12000");

let username = document.getElementById('usr');
let password = document.getElementById('psw');
let btn = document.getElementById('btn')

class Login{
    static io: any;
    constructor(private cb: Function){}

    emmitMessage(message: string){
        Login.io.emit('login',message);
    }

}

Login.io = socket;

function messageReceived(respose:any){

}

let login:Login = new Login(messageReceived);

login.emmitMessage('hola mundoo');

