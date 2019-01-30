import React, {Component} from 'react';

class ProductItem extends Component {



    render() {
        let {addInBasket} = this.props;
        let {id, preview, name, price, desc, } = this.props.product;

        return (
            <div className="product__list-item">
                <div className="product-item" data-product_id={id}>
                    <div className="product-item__preview">
                        <img className="product-item__img" src={preview} alt=""/>
                    </div>
                    <div className="product-item__content">
                        <div className="product-item__content-desc">
                            <div className="product-item__title">{name}</div>
                            <div className="product-item__desc">{desc}</div>
                        </div>
                        <div className="product-item__content-price">
                            <div className="product-item__price">{price} руб.</div>
                            <div className="product-item__add-cart">
                                <button className="btn-cart" onClick={()=>addInBasket(this.props.product)}>В корзину!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductItem;
