import React from 'react';

const CartItem = (props) => {
    const{title, price, qty} = props.product; // Object Distructing
    const{
        product, 
        onIncreaseQunatity, 
        onDecreaseQunatity, 
        onDeleteProduct
    } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} alt="" src={product.img}/>
            </div>
            <div className="right-block">
            <div style={{fontSize: 25}}>{title}</div>
            <div style={{color: '#777'}}>Rs {price}</div>
            <div style={{color: '#777'}}>Qty: {qty}</div>
                <div className="cart-item-actions">
                {/* Buttons */}
            <img 
                alt="increasing" 
                className="action-icons" 
                src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                onClick={() => onIncreaseQunatity(product)}
                />
                <img 
                    alt="decreasing" 
                    className="action-icons" 
                    src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                    onClick={() => onDecreaseQunatity(product)}
                />
                <img 
                    alt="delete" 
                    className="action-icons" 
                    src="https://cdn-icons.flaticon.com/png/128/484/premium/484662.png?token=exp=1645429894~hmac=fa4b1df755d3e74dfe57cfb9f6832605"
                    onClick={() => onDeleteProduct(product.id)}
                />
                </div>
            </div>
        </div>
    );
}
const styles = {
    image: {
        height: 110,
        width: 100,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;