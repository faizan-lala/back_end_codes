const User=require('../Model/usermodel');
const Product=require('../Model/product');
const multer=require('multer');

const upload=multer({dest:'Public/Images'});


exports.Homepage=(request,response)=>{
    response.render('Home.ejs');
};

exports.Registerpage=(request,response)=>{
    response.render('Register.ejs');
};

exports.Loginpage=(request,response)=>{
    response.render('Login.ejs');
};

exports.Productpage=(request,response)=>{
    response.render('Product.ejs');
};

exports.Signoutpage=(request,response)=>{
    request.session.faiz=null;
    request.session.destroy;
    response.redirect('/');
};

exports.ResgisterPost=(request,response)=>{
    const userobj=new User();
    userobj.name=request.body.name;
    userobj.age=request.body.age;
    userobj.password=request.body.password;

    userobj.registerUser().then(result=>{
        response.send('Successfully Register');
    }).catch(err=>{
        response.send('Not Register');
    })
}

exports.LoginPost=(request,response)=>{
    
    const userobj=new User(request.body.email);
    userobj.checkUser().then(result=>{
        if(result.length>0){
            request.session.faiz=request.body.email;
            response.redirect('/product');
            
        }
        else
        response.send('Failed to Login');
    }).catch(err=>{
        console.log(err);
        
    })
}

exports.ProductPost=(request,response)=>{
    const productObj=new Product();
    productObj.name=request.body.name;
    productObj.prize=request.body.prize;
    console.log(request.file);
    productObj.image=request.file.filename;
    productObj.description=request.body.description;

    productObj.product().then(result=>{
        response.send('Successful');
    }).catch(err=>{
        response.send('Not Saved');
    })
}