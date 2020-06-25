import React, { Component } from 'react';
class Cart extends Component {
  render() {
    var { children } = this.props;
    return (
        <section class="section">
                    <div class="table-responsive">
                        <table class="table product-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Tổng Cộng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            { children}
                            </table>
                    </div>
                </section>    
    );
  }
}

export default Cart;
