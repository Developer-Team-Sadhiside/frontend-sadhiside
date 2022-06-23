import { useState } from 'react';
import '../assets/styles/CardProduct.css'
import { dummyCard } from '../assets/dumps/card';

export function Card ({image, title, category, price}) {
  return (
    <div className='card-product col-sm-1'>
      <div className='img-wrapper'>
        <img className='card-img-top' src={image} />
      </div>
      <div>
        <h5 className='product-title'>{title}</h5>
        <p className='product-category'>{category}</p>
        <p className='price-product'>Rp {price.toLocaleString('id-ID')}</p>
      </div>
    </div>
  );
}

export default function CardCollection () {
  const [product, setProduct] = useState(dummyCard);

  return (
    <div className='container mt-4'>
      <div className='row'>
        {product.map((value) => {
          return (
            <Card
              image={value.image}
              title={value.title}
              category={value.category}
              price={value.price}
            />
          );
        })}
      </div>
    </div>
  );
};