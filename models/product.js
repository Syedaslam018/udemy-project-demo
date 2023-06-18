const db = require('../util/database')

const getProductsFromFile = () => {
 
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('insert into products (title, price, imageUrl, description) values(?, ?, ?, ?)',[this.title, this.price, this.imageUrl, this.description])
  }

  static deleteProductById(id) {
    return db.execute('delete from products where products.id = ?', [id]);
  }

  static fetchAll(cb) {
    return db.execute('select * from products')
  }

  static findById(id){
    return db.execute('select * from products where products.id = ?',[id])
  }
};
