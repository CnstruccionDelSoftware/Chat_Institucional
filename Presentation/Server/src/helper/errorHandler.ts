

const catchErrors = (fn:Function) =>{
    return function (req:any,res:any,next:any){
        try {
            fn(req,res,next);
        } catch (err) {
            if(typeof(err) == "string") {
                res.status(400).json({
                    message: err,
                })
            } else {
                next(err);
            }

            
        }
    }
};

export default catchErrors;