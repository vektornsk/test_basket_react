import React, {Component} from 'react';
import BasketProduct from "./BasketProduct";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {chanceProductBasket} from '../../redux/actions';

class Basket extends Component {

    modal(list, sum) {
        let products = list
            .filter(el => {
                if (el.inBasket) {
                    return el;
                } else {
                    return false;
                }
            })
            .map(el => el.name);

        alert(`Вы добавили в корзину [${products}] на сумму [${sum}]`);
    }

    summing() {
        let result = 0;
        this.props.products.forEach(el => {
            if (el.inBasket) {
                result += el.price;
            }
        });

        return result;
    }

    chanceProductBasket(product) {
        let productList = this.props.products.map(el => {
            if (el.id === product.id) {
                el.inBasket = false;
                return el;
            } else {
                return el;
            }
        });

        localStorage.setItem('products', JSON.stringify(productList));

        this.props.chanceProductBasket(productList);
    }


    componentDidMount() {

        let productList = JSON.parse(localStorage.getItem('products'));

        if (productList) {
            this.props.chanceProductBasket(productList);
        }

        window.onload = () => {
            let basketTop = this.refBasket.offsetTop;

            document.addEventListener('scroll', () => {

                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                if (scrollTop >= basketTop) {
                    this.refBasket.classList.add('fixed');
                } else {
                    this.refBasket.classList.remove('fixed');
                }
            });
        }

    }

    render() {
        let {products} = this.props;
        return (
            <div className="basket-aside" ref={node => this.refBasket = node}>
                <div className="basket-aside__head">
                    <img src="./dist/img/cart_ico.png" alt="" className="basket-aside__icon"/>
                    <span className="basket-aside__title">Корзина</span>
                </div>
                <div className="basket-aside__list">
                    {Array.isArray(products) && products.length ? products.map(el => el.inBasket ?
                        <BasketProduct key={el.id} removeFromBasket={this.chanceProductBasket.bind(this)}
                                       product={el}/> : '') : ''}
                </div>
                <div className="basket-aside__sum" data-basket="sum">Всего: <span>{this.summing()} руб.</span></div>
                <div className="basket-aside__btn">
                    <button className="btn btn-order" onClick={() => this.modal(products, this.summing())}>Оформить
                        заказ
                    </button>
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


export default connect(mapStateToProps, mapDispatchToProps)(Basket);