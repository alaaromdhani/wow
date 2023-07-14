module.exports ={
    login:(req,res)=>{
         req.session.authenticated = true
         res.status(200).send({status:'fine'})   


    },
    test:(req,res)=>{

        req.session.authenticated?res.status(200).send({
                data:{ 
                    worksFine:true,
                    message:'you are authenticated successfully',
                    data:'some data'

                }

        }):res.status(403).send({ 
            worksFine:false,
            message:'you are unauthorized to access ',
            data:'some data'

        })

    }




}