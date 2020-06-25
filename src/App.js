import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MessageContainer from './containers/MessageContainer';
import CartsContainer from './containers/CartsContainer';
import Footer from './components/Footer';
import CartResult from './components/CartResult';
import ProductsContainer from './containers/ProductsContainer';
class App extends Component {
    render() {
        return (
            <div class="hidden-sn animated deep-purple-skin">
                <div>
                    <Header />
                    <main id="mainContainer">
                        <div class="container">
                            <ProductsContainer />
                            <MessageContainer />
                            <CartsContainer />
                            <CartResult />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>

        );
    }
}

export default App;
