import React, {Component} from 'react';
import BasketProduct from "./BasketProduct";

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

    componentDidMount() {

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
        let {removeFromBasket, products, sum} = this.props;
        return (
            <div className="basket-aside" ref={node => this.refBasket = node}>
                <div className="basket-aside__head">
                    <img src="./dist/img/cart_ico.png" alt="" className="basket-aside__icon"/>
                    <span className="basket-aside__title">Корзина</span>
                </div>
                <div className="basket-aside__list">
                    {Array.isArray(products) && products.length ? products.map(el => el.inBasket ?
                        <BasketProduct key={el.id} removeFromBasket={removeFromBasket} product={el}/> : '') : ''}
                </div>
                <div className="basket-aside__sum" data-basket="sum">Всего: <span>{sum} руб.</span></div>
                <div className="basket-aside__btn">
                    <button className="btn btn-order" onClick={() => this.modal(products, sum)}>Оформить заказ</button>
                </div>
            </div>
        )
    }
}

export default Basket;