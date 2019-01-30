import React, {Component} from 'react';

class BasketProduct extends Component {

    render() {
        let {removeFromBasket} = this.props;
        let {name, price} = this.props.product;
        return (
            <div className="basket-aside__list-item">
                <div className="product-flat">
                    <div className="product-flat__del">
                        <button className="btn-del" onClick={()=>removeFromBasket(this.props.product)}></button>
                    </div>
                    <div className="product-flat__title">{name}</div>
                    <div className="product-flat__price">{price} руб.</div>
                </div>
            </div>
        )
    }
}

export default BasketProduct;
