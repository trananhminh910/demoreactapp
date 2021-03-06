import React, { Component } from 'react';
import Product from '../components/Product';
import Products from '../components/Products';
import { connect } from 'react-redux';
import {actAddToCart, actChangeMessage} from './../actions/index';
class ProductsContainer extends Component {
    render() {
        var {products } = this.props;
        return (
            <Products>
                { this.showProducts(products)}
            </Products>
        );
    }
    showProducts = (products) => {
        var { onAddToCart,onChangeMessage } = this.props;
        var result = null;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return <Product 
                    key={index}
                    product= { product}
                    onAddToCart = { onAddToCart}
                    onChangeMessage = { onChangeMessage}
                />
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1))
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message)) 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
