import '../assets/styles/ProductPreview.css';
import OfferModal from './buyer/OfferModal';

import { Link, useParams } from 'react-router-dom';

import { useProductContext } from '../services/productService';
import { useEffect, useState } from 'react';

export function ProductCarouselPreview(props) {
  return (
    <div id='productCarouselPreviewControl' className='carousel slide product-carousel-preview'>
      <div className='carousel-inner product-carousel-image-preview'>
        {props?.product?.produk?.gambar.map((value, index) => {
          return (
            <div key={index} className='carousel-item active'>
              <img src={value} className='product-carousel-image-size-preview' />
            </div>
          );
        })}
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
      <p className='product-description-description-preview'>{props?.product?.produk?.deskripsi}</p>
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
      <button type='submit' className='product-card-button-publish-preview' data-bs-toggle='modal' data-bs-target={props.idTargetModal}>
        {props.content}
      </button>
    </Link>
  );
}

export function ProductCardPreview(props) {
  const params = useParams();
  return (
    <div className='product-card-preview'>
      <p className='product-card-heading-preview'>{props?.product?.produk?.nama_produk}</p>
      <p className='product-card-category-preview'>{props?.product?.produk?.kategori}</p>
      <p className='product-card-price-preview'>Rp. {props?.product?.produk?.harga_produk.toLocaleString('id-ID')}</p>
      <div className='product-card-button-preview'>
        {params?.id ? (
          <>
            {props?.isOffered ? (
              <PurpleButton content='Menunggu respon penjual' idTargetModal={`#match${props?.product?.produk?.id}`} />
            ) : (
              <PurpleButton content='Saya tertarik dan ingin nego' idTargetModal={`#match${props?.product?.produk?.id}`} />
            )}
            <OfferModal product={props?.product} />
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
        {props?.product?.produk?.User?.foto ? (
          <img src={props?.product?.produk?.User?.foto} alt='User Image' className='col-sm-3 user-card-image-size-preview' />
        ) : (
          <img src='/svg/fi_blank-profile.svg' alt='User Image' className='col-sm-3 user-card-image-size-preview' />
        )}
      </div>
      <div className='col user-card-identity-preview'>
        <div className='user-card-identity-name-preview'>{props?.product?.produk?.User?.nama}</div>
        <div className='user-card-identity-city-preview'>{props?.product?.produk?.User?.kota}</div>
      </div>
    </div>
  );
}

export default function ProductPreview() {
  const params = useParams();
  const productContext = useProductContext();
  const [data, setData] = useState();

  async function getProduct() {
    const data = await productContext.getProductById(params.id);
    setData(data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className='row mt-4'>
        <div className='col-md-6 offset-md-1'>
          <ProductCarouselPreview product={data?.product} />
          <ProductDescriptionPreview product={data?.product} />
        </div>
        <div className='col-md-4'>
          <ProductCardPreview product={data?.product} isOffered={data?.isOffered} />
          <UserCardPreview product={data?.product} />
        </div>
      </div>
    </>
  );
}
