import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actDeleteInCart} from './../actions/index';
class CartsContainer extends Component {
    render() {
        var {cart } = this.props;
        return (
            <Cart>
                { this.showCartItem(cart)}
            </Cart>
        );
    }
    showCartItem = (cart) => {
        var { onDeleteToCart} = this.props;
        var result = [];
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteToCart= { onDeleteToCart}
                    />
                )
            })
        }
        return result;
    }
}
CartsContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteToCart: (cart) => {
            dispatch(actDeleteInCart(cart))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartsContainer);
