import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        var { item } = this.props;
        return (
            <tbody>
                <tr>
                    <th scope="row">
                        <img src={item.product.image} alt={item.product.name} class="img-fluid z-depth-0" />
                    </th>
                    <td>
                        <h5>
                            <strong>{item.product.name}</strong>
                        </h5>
                    </td>
                    <td>{item.product.price}$</td>
                    <td class="center-on-small-only">
                        <span class="qty">{item.quantity} </span>
                        <div class="btn-group radio-group" data-toggle="buttons">
                            <label class="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                                <a>—</a>
                            </label>
                            <label class="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                                <a>+</a>
                            </label>
                        </div>
                    </td>
                    <td>{this.showTotalCart(item.product.price, item.quantity)}$</td>
                    <td>
                        <button type="button" class="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                            title="" data-original-title="Remove item"
                            onClick={ () => { this.onDelete(item)}}
                            >
                            X
                                        </button>
                    </td>
                </tr>

            </tbody>
        );
    }
    showTotalCart = (price, quantity) => {
        return price* quantity;
    }

    onDelete = (item) => {
        var {onDeleteToCart} = this.props;
        onDeleteToCart(item);
    }
}

export default CartItem;
