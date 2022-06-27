import '../assets/styles/ProductPreview.css';
import { users } from '../assets/dumps/users';
import { products } from '../assets/dumps/products';
import { Link, useParams } from 'react-router-dom';

export function ProductCarouselPreview() {
  const params = useParams();

  return (
    <div id='productCarouselPreviewControl' className='carousel slide product-carousel-preview'>
      <div className='carousel-inner product-carousel-image-preview'>
        <div className='carousel-item active'>
          <img src={products[params.id]?.image} className='product-carousel-image-size-preview' />
        </div>
        <div className='carousel-item'>
          <img src={products[params.id]?.image} className='product-carousel-image-size-preview' />
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

export function ProductDescriptionPreview() {
  const params = useParams();

  return (
    <div className='product-description-preview'>
      <h3 className='product-description-heading-preview'>Deskripsi</h3>
      <p className='product-description-description-preview'>{products[params.id]?.description}</p>
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
      <button type='submit' className='product-card-button-publish-preview'>
        {props.content}
      </button>
    </Link>
  );
}

export function ProductCardPreview() {
  const params = useParams();

  return (
    <div className='product-card-preview'>
      <p className='product-card-heading-preview'>{products[params.id]?.title}</p>
      <p className='product-card-category-preview'>{products[params.id]?.category}</p>
      <p className='product-card-price-preview'>Rp. {products[params.id]?.price.toLocaleString('id-ID')}</p>
      <div className='product-card-button-preview'>
        {params.id ? (
          <PurpleButton content='Saya Tertarik dan Ingin Nego' />
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

export function UserCardPreview() {
  const params = useParams();

  return (
    <div className='user-card-preview row g-0'>
      <div className='user-card-image-preview col-sm-3'>
        <img src={users[params.id]?.profilePicture} alt='User Image' className='col-sm-3 user-card-image-size-preview' />
      </div>
      <div className='col user-card-identity-preview'>
        <div className='user-card-identity-name-preview'>{users[params.id]?.name ?? 'Undefined'}</div>
        <div className='user-card-identity-city-preview'>{users[params.id]?.city ?? 'Undefined'}</div>
      </div>
    </div>
  );
}

export default function ProductPreview() {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-6 offset-md-1'>
          <ProductCarouselPreview />
          <ProductDescriptionPreview />
        </div>
        <div className='col-md-4'>
          <ProductCardPreview />
          <UserCardPreview />
        </div>
      </div>
    </div>
  );
}
