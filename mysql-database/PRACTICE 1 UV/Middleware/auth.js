exports.isAuth=(request,response,next)=>{
    if(request.session.faiz)
        next();
    else
    {
        response.redirect('/login');
        
    }
}