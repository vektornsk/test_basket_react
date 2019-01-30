import React, {Component, Fragment} from 'react';
import ProductList from './components/Product/ProductList';
import Basket from './components/Basket/Basket';
import logo_img from './images/logo.png';


class App extends Component {
    state = {
        productList: [
            {
                id: 1,
                preview: '../images/product/product_1.png',
                name: 'Пакет видеопрограмм',
                desc: 'Пакет лучших программ для работы с видео! Редактируйте на монтажном столе. Конвертируйте в любые форматы. Создавайте слайд-шоу. Нарезайте видео. Захватывайте видео с экрана, камер и ТВ-тюнера. Записывайте DVD и диски Blu-ray.',
                price: 1990,
                inBasket: false
            },
            {
                id: 2,
                preview: '../images/product/product_2.png',
                name: 'Фотостудия Movavi',
                desc: 'Полный набор инструментов для легкой фотообработки. Настраивайте параметры изображения вручную и улучшайте качество автоматически, добавляйте крутые фильтры и надписи. Обрезайте, отражайте и поворачивайте кадр, изменяйте размер фото. Удаляйте с фото лишние объекты и заменяйте скучные фоны. Обрабатывайте папки с фото в пакетном режиме, создавайте слайд-шоу с музыкой и переходами.',
                price: 1890,
                inBasket: false
            },
            {
                id: 3,
                preview: '../images/product/product_3.png',
                name: 'Movavi Фоторедактор',
                desc: 'Улучшайте качество фото автоматически и вручную. Настраивайте резкость, контраст и цветность. Удаляйте с фотографий объекты, случайно попавшие в кадр. Заменяйте фон изображения. Добавляйте надписи. Выделяйте элементы при помощи удобных инструментов – кисти, волшебной палочки или лассо. Используйте штамп, чтобы устранять мелкие дефекты изображений.',
                price: 990,
                inBasket: false
            },
            {
                id: 4,
                preview: '../images/product/product_4.png',
                name: 'Movavi Пакетный фоторедактор',
                desc: 'Обрабатывайте любое количество фотографий одним нажатием кнопки – уменьшайте целые фотоальбомы, переименовывайте файлы, конвертируйте формат и улучшайте качество изображений в пакетном режиме. Теперь вам не придется сохранять каждый файл по отдельности: просто примените изменения ко всем фото сразу и экспортируйте их с новыми настройками!',
                price: 490,
                inBasket: false
            },
            {
                id: 5,
                preview: '../images/product/product_5.png',
                name: 'Захват видео с экрана',
                desc: 'Записывайте все, что происходит на экране вашего монитора: видеочаты, работу в программах и интернет-браузерах и многое другое. Сохраняйте скринкасты в любые популярные форматы и для мобильных устройств.',
                price: 1490,
                inBasket: false
            }
        ]

    }

    chanceProductBasket(product, value) {
        return this.state.productList.map(el => {
            if (el.id === product.id) {
                el.inBasket = value;
                return el;
            } else {
                return el;
            }
        });
    }

    addInBasket(product) {
        let productList = this.chanceProductBasket(product, true);
        localStorage.setItem('products', JSON.stringify(productList));
        this.setState({productList});
    }

    removeFromBasket(product) {
        let productList = this.chanceProductBasket(product, false);
        localStorage.setItem('products', JSON.stringify(productList));
        this.setState({productList});
    }

    summing() {
        let result = 0;

        this.state.productList.forEach(el => {
            if (el.inBasket) {
                result += el.price;
            }
        });

        return result;
    }

    componentDidMount() {
        let productList = JSON.parse(localStorage.getItem('products'));
        this.setState({productList});
    }

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
                                <ProductList addInBasket={this.addInBasket.bind(this)}
                                             products={this.state.productList}/>
                            </div>
                            <div className="page__aside">
                                <Basket sum={this.summing()} removeFromBasket={this.removeFromBasket.bind(this)}
                                        products={this.state.productList}/>
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
