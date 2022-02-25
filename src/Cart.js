import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const {products} = props;
    return (
        <div className="cart">
            {/* <CartItem qty={1} price={99} title={"Watch"} img={''} />   passing attributes */}
            {products.map ((product) => {
                return(
                    <CartItem 
                        product = {product}
                        key = {product.id}
                        onIncreaseQunatity = {props.onIncreaseQunatity}
                        onDecreaseQunatity = {props.onDecreaseQunatity}
                        onDeleteProduct = {props.onDeleteProduct}
                    />
                )
            })}
        </div>
    );
}
export default Cart;