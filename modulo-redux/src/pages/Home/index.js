import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';
import { ProductList } from './styles';
import { formatPrice } from '../../util/format'

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormated: formatPrice(product.price),
    }));

    this.setState({ products: data })};

  render() {
    const { products } = this.state;
    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong> {product.title} </strong>
            <span> {product.priceFormated} </span>
            <button type="button">
              <i>
                <MdAddShoppingCart size={16} color="#fff" /> 3
              </i>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
