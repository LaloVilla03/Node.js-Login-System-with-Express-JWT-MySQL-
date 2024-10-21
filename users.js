const jwt = require('jsonwebtoken');

module.exports={
    validateRegister: (req,res,next)=>{
        //username min length 3
        console.log(req.body);
        if(!req.body.username || req.body.username.length < 3){
            return res.status(400).send({
                msg:'Porfavor escribe un nombre de usuario con minimo 3 caracteres'
                //es mejor decir que ambos son incorrectos
            });
        }
        //password min 6 chars
        if(!req.body.password || req.body.password < 6){
            return res.status(400).send({
                msg:'Escribe un password con minimo 6 caracteres'
                //es mejor decir que ambos son incorrectos
            });
        }
        //password (reapet) does not match 
        if(!req.body.password_repeat || req.body.password != req.body.password_repeat){
            return res.status(400).send({
                msg:'Ambos password deben ser iguales!!'
            });
        }
        next();
    },


    isLoggedIn: (req,res,next)=>{

        try {
            const token = req.headers.authorization.split('')[1];
            const decoded= jwt.sign(
                token,
                'SECRETKEY'
            );

            req.userData = decoded;
            next();

        }
        catch (err){
            return res.status(401).send({
                msg:'Your session is not valid'
            });
        }
    }

};