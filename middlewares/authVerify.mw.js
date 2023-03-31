const jwt=require('jsonwebtoken');

const authVerify = (req,res,next)=>{

    const token = req.headers.authorization;
    console.log(token);
    try{
        const decodeToken = jwt.verify(token , 'abcdef');
        req.user={id : decodeToken.id};
        return next();
    }
    catch(err){
        console.error("Error : " , JSON.stringify(err));
    }
        
}

module.exports=authVerify;