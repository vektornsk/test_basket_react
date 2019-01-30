import React, {Component} from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {



    render() {
        let {products, addInBasket} = this.props;

        return (
            <div className="product">
                <div className="product__list">
                    {Array.isArray(products) && products.length ? products.map(el => <ProductItem addInBasket={addInBasket} key={el.id} product={el}/>) : "Нет продуктов"}
                </div>
            </div>
        )
    }
}

export default ProductList;