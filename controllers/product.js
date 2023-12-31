
const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
}

exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
}

exports.getShopProducts = (req, res, next) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
}

exports.get404 = (req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
}