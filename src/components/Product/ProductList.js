import React, {Component} from 'react';
import ProductItem from './ProductItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {chanceProductBasket} from '../../redux/actions';

class ProductList extends Component {

    chanceProductBasket(product) {
        // debugger;
        let productList = this.props.products.map(el => {
            if (el.id === product.id) {
                el.inBasket = true;
                return el;
            } else {
                return el;
            }
        });

        localStorage.setItem('products', JSON.stringify(productList));

        this.props.chanceProductBasket(productList);
    }

    render() {
        let {products} = this.props;

        return (
            <div className="product">
                <div className="product__list">
                    {Array.isArray(products) && products.length ? products.map(el => <ProductItem
                        addInBasket={this.chanceProductBasket.bind(this)} key={el.id} product={el}/>) : "Нет продуктов"}
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.productList
    }
}

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        chanceProductBasket,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);