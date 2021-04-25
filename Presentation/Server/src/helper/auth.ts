const jwt = require('jwt-then');
const secret = "wawawa"


const asyncFunction = async (req:any,res:any,next:any) => {
    try {
        if(!req.headers.authorization) throw "Forbidden!";
        const token = req.headers.authorization.split(' ')[1];
        const payload = await jwt.verify(token,secret);
        req.payload = payload;
        next();
    } catch (err) {
        res.status(401).json({
            message: "Forbidden! ERROR"
        })
    }
}

export default asyncFunction;