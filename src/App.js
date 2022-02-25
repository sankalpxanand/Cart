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
                img: 'https://images.casiocdn.com/fit-in/368x500/casio-v2/resource/images/products/watches/hd/GGB100-1A9_hd.png',
                id: 1
            },
            {
                title: 'Mobile Phone',
                price: 999,
                qty: 1,
                img: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-m127gzbhins/gallery/in-galaxy-m-sm-m127gzbhins-sm-m---gzbgins-405435076?$684_547_PNG$',
                id: 2
            },
            {
                title: 'Laptop',
                price: 9999,
                qty: 1,
                img: 'https://media.wired.com/photos/5fb2cc575c9914713ead03de/2:3/w_1200,h_1800,c_limit/Gear-Apple-MacBook-Air-top-down-SOURCE-Apple.jpg',
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
  getCartTotal = () => {
    const {products} = this.state;

    let cartTotal = 0;

    products.forEach((product) => { //used forEach instead of map
      cartTotal = cartTotal + product.qty * product.price;
    })
    return cartTotal;
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
        <div style={{fontSize: 20, padding:10}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
