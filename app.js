const path = require('path');

const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');

const User = require('./models/user');
const Product = require('./models/product');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item')

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const app = express();
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/user')
const expenseRoutes = require('./routes/expense');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findByPk(1)
    .then(user => {
        req.user = user;
        next();
    })
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(userRoutes);
app.use(expenseRoutes);

app.use(errorController.get404);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'})
User.hasMany(Product)
User.hasOne(Cart)
Cart.belongsTo(User);
Cart.belongsToMany(Product, {through: CartItem})
Product.belongsToMany(Cart, {through: CartItem})

sequelize
// .sync({force: true})
.sync()
.then(result => {
    return User.findByPk(1)
})
.then(user => {
    if(!user){
        return User.create({name: 'Aslam', email: 'test@test.com', phoneNumber: '1234567890'})
    }
    else{
        return user;
    }
})
.then(user => {
    user.createCart();
})
.then(user => {
    app.listen(3000)
})
.catch(err => {
    console.log(err)
})


