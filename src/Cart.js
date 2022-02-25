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
        console.log("Hey, increase the quantity of the product");
        console.log("this.props", this.product);
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            products
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
                        />
                    )
                })}
            </div>
        );
    }
}

export default Cart;