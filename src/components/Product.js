import React, { Component } from 'react';
import * as Message from './../constants/Message';

class Product extends Component {
    render() {
        var { product } = this.props;
        return (
            <div class="col-lg-4 col-md-6 mb-r">
                <div class="card text-center card-cascade narrower">
                    <div class="view overlay hm-white-slight z-depth-1">
                        <img src={product.image} class="img-fluid" alt={product.name}/>
                        <a>
                            <div class="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">
                            <strong>
                                <a> {product.name}</a>
                            </strong>
                        </h4>
                        <ul class="rating">
                            <li>
                                { this.showRating(product)}
                            </li>
                            
                        </ul>
                        <p class="card-text">
                            { product.description}
                                    </p>
                        <div class="card-footer">
        <span class="left">{product.price}$</span>
                            <span class="right">
                                <a class="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                    <i 
                                    class="fa fa-shopping-cart"
                                    onClick= { () => { this. addToCart(product)}}
                                    ></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
    addToCart = (product) => {
        var { onAddToCart, onChangeMessage } = this.props;
        onAddToCart(product)
        onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }
    showRating = (product) => {
        var result = [];
        for( var i = 1; i<= product.rating; i++) {
            result.push(<i className="fa fa-star"></i>)
        }
        for(var h = 1; h<= 5 - product.rating; h++) {
            result.push(<i className="fa fa-star-o"></i>)
        }
        return result;
    }
}

export default Product;
