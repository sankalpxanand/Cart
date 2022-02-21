import React from 'react';

class CartItem extends React.Component{
    constructor () {
        super(); //super constructor
        this.state = {
            title: 'Mobile Phone',
            price: '999',
            qty: '1',
            img: ''
        }
        // this.increaseQty = this.increaseQty.bind(this);
    }
    increaseQty = () => { //arrow function automatically binds 'this' and the instance of the 'CartItem' class
        console.log('this', this.state);
    }
    render () {
        const{title, price, qty} = this.state; // Object Distructing
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
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
                        onClick={this.increaseQty}
                    />
                    <img 
                        alt="decreasing" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons.flaticon.com/png/128/484/premium/484662.png?token=exp=1645429894~hmac=fa4b1df755d3e74dfe57cfb9f6832605"
                    />
                    </div>
                </div>
            </div>
        );
    }
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