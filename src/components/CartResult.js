import React, { Component } from 'react';
import CartItem from './CartItem';
class CartResult extends Component {
    render() {
        return (
                <tr>
                    <td colSpan="3"></td>
                    <td>
                        <h4>
                            <strong>Tổng Tiền</strong>
                        </h4>
                    </td>
                    <td>
                        <h4>
                            <strong>15$</strong>
                        </h4>
                    </td>
                    <td colSpan="3">
                <button type="button" class="btn btn-primary waves-effect waves-light">Complete purchase
                                            <i class="fa fa-angle-right right"></i>
                </button>
            </td>
            </tr>
            
        );
    }
}

export default CartResult;