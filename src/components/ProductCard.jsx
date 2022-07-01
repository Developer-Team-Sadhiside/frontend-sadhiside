import { useState } from 'react';
import '../assets/styles/ProductCard.css';
import { products } from '../assets/dumps/products';
import { Link } from 'react-router-dom';

export function Card(props) {
  return (
    <div className='card-product col-sm-2'>
      <Link to={props.link} style={{ textDecoration: 'none' }}>
        <div className='img-wrapper'>
          <img className='card-img-top' src={props.image} />
        </div>
        <div>
          <h5 className='product-title'>{props.title}</h5>
          <p className='product-category'>{props.category}</p>
          <p className='price-product'>Rp. {props.price.toLocaleString('id-ID')}</p>
        </div>
      </Link>
    </div>
  );
}

export default function CardCollection() {
  const [product, setProduct] = useState(products);

  return (
    <div className='container mt-4'>
      <div className='row'>
        {product.map((value) => {
          return <Card key={value.id} image={value.image} title={value.title} category={value.category} price={value.price} link={`/products/preview/${value.id}`}/>;
        })}
      </div>
    </div>
  );
}
