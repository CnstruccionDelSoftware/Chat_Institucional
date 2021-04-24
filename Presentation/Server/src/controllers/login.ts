//import logindto from './logindto';
const socket = (window as any).io("192.168.0.101:12000");

let username = document.getElementById('usr');
let password = document.getElementById('psw');
let btn = document.getElementById('btn')

class Login{
    static io: any;
    constructor(private cb: Function){}

    emmitMessage(id: number , password:string){
        Login.io.emit('login:chat',id,password);
    }

    getCourses(id:number){
        Login.io.emit('courseList:chat',id)
    }

}

Login.io = socket;

function messageReceived(respose:any){

}

let login:Login = new Login(messageReceived);

login.emmitMessage(1,'123');
login.getCourses(1);


