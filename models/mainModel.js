function wrongpass(req,res,next){
    const pPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const valid = pPattern.test(req.body.pass);
    if(!valid)
    {
        // res.redirect('/')
        res.status(404).send({message: "Password is not valid , its from server", status: false})
    }
    else{
        next()
    }
}
module.exports = wrongpass