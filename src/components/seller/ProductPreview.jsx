import '../../assets/styles/ProductPreview.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function ProductCarouselPreview(props) {
  return (
    <div id='productCarouselPreviewControl' className='carousel slide product-carousel-preview'>
      <div className='carousel-inner product-carousel-image-preview'>
        <div className='carousel-item active'>
          <img src={props.imagePreview} className='product-carousel-image-size-preview' />
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
      <p className='product-description-description-preview'>{props.products.deskripsi}</p>
    </div>
  );
}

export function EditButton(props) {
  return (
    <button
      onClick={() => {
        props.toggleEdit(false);
      }}
      className='product-card-button-edit-preview'
    >
      Edit
    </button>
  );
}

export function PurpleButton(props) {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  return (
    <Link to=''>
      <button
        onClick={(event) => {
          setLoading(true);
          props.publish(props.products.id, props.products);
        }}
        type='submit'
        className='product-card-button-publish-preview'
        data-bs-toggle='modal'
        data-bs-target={props.idTargetModal}
      >
        {loading ? <>Uploading...</> : <>{props.content}</>}
      </button>
    </Link>
  );
}

export function ProductCardPreview(props) {
  return (
    <div className='product-card-preview'>
      <p className='product-card-heading-preview'>{props.products.nama_produk}</p>
      <p className='product-card-category-preview'>{props.products.kategori}</p>
      <p className='product-card-price-preview'>Rp. {props.products.harga_produk.toLocaleString('id-ID')}</p>
      <div className='product-card-button-preview'>
        <div>
          <PurpleButton products={props.products} publish={props.publish} content='Terbitkan' />
          <EditButton toggleEdit={props.toggleEdit} />
        </div>
      </div>
    </div>
  );
}

export function UserCardPreview(props) {
  return (
    <div className='user-card-preview row g-0'>
      <div className='user-card-image-preview col-sm-3'>
        <img src={props.users.foto} alt='User Image' className='col-sm-3 user-card-image-size-preview' />
      </div>
      <div className='col user-card-identity-preview'>
        <div className='user-card-identity-name-preview'>{props.users.nama}</div>
        <div className='user-card-identity-city-preview'>{props.users.kota}</div>
      </div>
    </div>
  );
}

export default function ProductPreview(props) {
  const params = useParams();

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-6 offset-md-1'>
          <ProductCarouselPreview imagePreview={props.imagePreview} products={props.products} />
          <ProductDescriptionPreview products={props.products} />
        </div>
        <div className='col-md-4'>
          <ProductCardPreview publish={props.publish} toggleEdit={props.toggleEdit} products={props.products} />
          <UserCardPreview users={props.products.User} />
        </div>
      </div>
    </div>
  );
}
