import '../assets/styles/ProductPreview.css';
import { dummyUsers } from '../assets/dumps/users';
import { dummyProducts } from '../assets/dumps/products';
import OfferModal from './buyer/OfferModal';

import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

export function ProductCarouselPreview(props) {
  return (
    <div id='productCarouselPreviewControl' className='carousel slide product-carousel-preview'>
      <div className='carousel-inner product-carousel-image-preview'>
        <div className='carousel-item active'>
          <img src={props.products[props.params.id].image ?? dummyProducts[0].image} className='product-carousel-image-size-preview' />
        </div>
        <div className='carousel-item'>
          <img src={props.products[props.params.id].image ?? dummyProducts[0].image} className='product-carousel-image-size-preview' />
        </div>
      </div>
      <div className='product-carousel-button-preview'>
        <button className='carousel-control-prev' data-bs-target='#productCarouselPreviewControl' data-bs-slide='prev'>
          <img src='/svg/fi_product-button-prev-preview.svg' alt='Previous Button' className='product-carousel-button-size-preview' />
        </button>
        <button className='carousel-control-next' data-bs-target='#productCarouselPreviewControl' data-bs-slide='next'>
          <img src='/svg/fi_product-button-next-preview.svg' alt='Next Button' className='product-carousel-button-size-preview' />
        </button>
      </div>
    </div>
  );
}

export function ProductDescriptionPreview(props) {
  return (
    <div className='product-description-preview'>
      <h3 className='product-description-heading-preview'>Deskripsi</h3>
      <p className='product-description-description-preview'>{props.products[props.params.id].description ?? dummyProducts[0].description}</p>
    </div>
  );
}

export function EditButtonPreview() {
  return (
    <Link to=''>
      <button type='submit' className='product-card-button-edit-preview'>
        Edit
      </button>
    </Link>
  );
}

export function PurpleButton(props) {
  return (
    <Link to=''>
      <button type='submit' className='product-card-button-publish-preview' data-bs-toggle='modal' data-bs-target={`#${props.idModal}`}>
        {props.content}
      </button>
    </Link>
  );
}

export function ProductCardPreview(props) {
  return (
    <div className='product-card-preview'>
      <p className='product-card-heading-preview'>{props.products[props.params.id].title ?? dummyProducts[0].title}</p>
      <p className='product-card-category-preview'>{props.products[props.params.id].category ?? dummyProducts[0].category}</p>
      <p className='product-card-price-preview'>Rp. {props.products[props.params.id].price.toLocaleString('id-ID') ?? dummyProducts[0].price.toLocaleString('id-ID')}</p>
      <div className='product-card-button-preview'>
        {props.params.id ? (
          <>
            <PurpleButton content='Saya Tertarik dan Ingin Nego' idModal={props.idModal} />
            <OfferModal idModal={props.idModal} products={props.products} params={props.params} />
          </>
        ) : (
          <div>
            <PurpleButton content='Terbitkan' />
            <EditButtonPreview />
          </div>
        )}
      </div>
    </div>
  );
}

export function UserCardPreview(props) {
  return (
    <div className='user-card-preview row g-0'>
      <div className='user-card-image-preview col-sm-3'>
        <img src={props.users[props.params.id].profilePicture ?? dummyUsers[0]?.profilePicture} alt='User Image' className='col-sm-3 user-card-image-size-preview' />
      </div>
      <div className='col user-card-identity-preview'>
        <div className='user-card-identity-name-preview'>{props.users[props.params.id].name ?? dummyUsers[0]?.name}</div>
        <div className='user-card-identity-city-preview'>{props.users[props.params.id].city ?? dummyUsers[0]?.city}</div>
      </div>
    </div>
  );
}

export default function ProductPreview() {
  const [products, setProduct] = useState(dummyProducts);
  const [users, setUsers] = useState(dummyUsers);
  const params = useParams();

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-6 offset-md-1'>
          <ProductCarouselPreview products={products} params={params} />
          <ProductDescriptionPreview products={products} params={params} />
        </div>
        <div className='col-md-4'>
          <ProductCardPreview idModal={`offerModal${products[params.id].id}`} products={products} params={params}/>
          <UserCardPreview users={users} params={params}/>
        </div>
      </div>
    </div>
  );
}
