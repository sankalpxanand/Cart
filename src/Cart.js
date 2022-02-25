import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
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
    render(){
        const {products} = this.state;
        
        return (
            <div className="cart">
                {/* <CartItem qty={1} price={99} title={"Watch"} img={''} />   passing attributes */}
                {products.map ((product) => {
                    return(
                        <CartItem 
                            product = {product}
                            key = {product.id}
                            onIncreaseQunatity = {this.handleIncreaseQuantity}
                            onDecreaseQunatity = {this.handleDecreaseQuantity}
                            onDeleteProduct = {this.handleDeleteProduct}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Cart;