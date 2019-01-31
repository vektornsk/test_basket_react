import React, {Component, Fragment} from 'react';
import ProductList from './components/Product/ProductList';
import Basket from './components/Basket/Basket';
import logo_img from './images/logo.png';


class App extends Component {

    render() {
        return (
            <Fragment>
                <div className="wrapper">
                    <header className="header">
                        <div className="header__container">
                            <div className="header__logo">
                                <a href="/" className="logo">
                                    <img src={logo_img} alt="" className="logo__img"/>
                                </a>
                            </div>
                        </div>
                    </header>
                    <div className="page">
                        <div className="page__container">
                            <div className="page__content">
                                <ProductList/>
                            </div>
                            <div className="page__aside">
                                <Basket/>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="footer__container"></div>
                </footer>
            </Fragment>
        )
    }
}

export default App;
