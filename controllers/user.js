const User = require('../models/user')
//const Cart = require('../models/cart')

exports.postuserData = async (req, res, next) => {
    //console.log(req.body);
    const name = req.body.fname;
    const phno = req.body.fnumber;
    const email = req.body.fmail
    const postData = await User.create({ name: name, email: email, phoneNumber: phno});
    res.status(201).json(postData);
  }

  exports.getUserData = async (req, res, next) => {
    const some = await User.findAll()
    res.status(201).json(some);
   }

   exports.deleteUserData = async(req, res, next) => {
    const prodId = req.params.productId;
    //console.log(prodId);
    User.findByPk(prodId)
    .then((user) => {
      return user.destroy();
    })
  }