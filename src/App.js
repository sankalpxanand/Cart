import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor () {
    super(); //super constructor
    this.state = {
        products: [
            {
                title: 'Watch',
                price: 99,
                qty: 1,
                img: '',
                id: 1
            },
            {
                title: 'Mobile Phone',
                price: 999,
                qty: 1,
                img: '',
                id: 2
            },
            {
                title: 'Laptop',
                price: 9999,
                qty: 1,
                img: '',
                id: 3
            }
        ]
    }
    // this.increaseQty = this.increaseQty.bind(this);
}
  handleIncreaseQuantity = (product) => {
      const { products } = this.state;
      const index = products.indexOf(product);
      console.log("Hey, increase the quantity of the product");

      products[index].qty += 1;

      this.setState({
          products
      })
  }
  handleDecreaseQuantity = (product) => {
      const { products } = this.state;
      const index = products.indexOf(product);

      if(products[index].qty === 0){
          console.log("The quantity of the product is already 0");
          return;
      }
      console.log("Hey, decrease the quantity of the product");

      products[index].qty -= 1;

      this.setState({
          products
      })
  }
  handleDeleteProduct = (id) => {
      const{products} = this.state;
      const items = products.filter((item) => item.id !== id); //[{}]
      this.setState({
          products: items
      })
  }
  getCartCount = () => {
    const{products} = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }
  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
          products = {products} 
          onIncreaseQunatity = {this.handleIncreaseQuantity}
          onDecreaseQunatity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
      </div>
    );
  }
}

export default App;
