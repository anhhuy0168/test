const Account = require('../models/Account')
class AccountController {

    //Register
    userRegister (req, res,next ){
        var username = req.body.username
        var password = req.body.password
        Account.findOne({
            username:username
        })
        .then(data=>{
            if(data){
                res.json('da ton tai')

            }
            else{
               return Account.create({
                    username : username,
                    password : password
                })
              
            }
        })
        .then(data=>{
            res.json('tao tai khoan thanh cong')
        })//quay tro lai trang truowc do
       
        .catch(err=>{
            res.status(500).json('tao tai khoan that bai')
        })
      }
      //login
      userLogin (req, res,next ){
        var username = req.body.username
        var password = req.body.password
        Account.findOne({
            username:username,
            password:password
        })
        .then(data=>{
            if(data){
                res.json('dang nhap thanh cong')
            }
            else{
                res.json(' dang nhap that bai')
            }
        })
        .catch(err=>{
            res.status(500).json('dang nhap that bai')
        })
      }
      //login with gg
      

}
    module.exports = new AccountController();