import '../assets/styles/ProductCard.css';
import { Link, useNavigate } from 'react-router-dom';
import { useProductContext } from '../services/productService';

export function Card(props) {
  const productContext = useProductContext();
  const navigate = useNavigate();

  function checkUserLogin() {
    if (!localStorage.getItem('token')) navigate('/login');
  }
  return (
    <div
      onClick={() => {
        checkUserLogin();
      }}
      className='card-product col-sm-2'
    >
      <Link to={props.link} style={{ textDecoration: 'none' }}>
        <div className='img-wrapper'>
          <img className='card-img-top' src={props.image} />
        </div>
        <div>
          <h5 className='product-title'>{props.title}</h5>
          <p className='product-category'>{props.category}</p>
        </div>
      </Link>
      <div className='row'>
        <Link to={props.link} style={{ textDecoration: 'none' }} className='col-9'>
          <p className='price-product'>Rp. {props?.price.toLocaleString('id-ID')}</p>
        </Link>
        <span className='col'>
          <img
            onClick={() => {
              productContext.productLikeHandler(props.productId);
            }}
            className='product-like-button'
            src={props.isLike ? '/svg/fi_like.svg' : '/svg/fi_unlike.svg'}
            alt='Like icon'
          />
        </span>
      </div>
    </div>
  );
}

export default function CardCollection() {
  const productContext = useProductContext();
  return (
    <>
      <div className='container mt-4'>
        <div className='row'>
          {productContext.toggleFilter ? (
            <>
              {productContext.products?.map((value) => {
                return (
                  <Card
                    productId={value.id}
                    key={value.id}
                    image={value.gambar[0]}
                    title={value.nama_produk}
                    category={value.kategori}
                    price={value.harga_produk}
                    isLike={value?.isLike}
                    link={`/products/preview/${value.id}`}
                  />
                );
              })}
            </>
          ) : productContext.filteredProducts.length > 0 ? (
            <>
              {productContext.filteredProducts?.map((value) => {
                return (
                  <Card
                    productId={value.id}
                    key={value.id}
                    image={value.gambar[0]}
                    title={value.nama_produk}
                    category={value.kategori}
                    price={value.harga_produk}
                    isLike={value?.isLike}
                    link={`/products/preview/${value.id}`}
                  />
                );
              })}
            </>
          ) : (
            <>
              <h1 className='text-center text-secondary mt-4'>T_T</h1>
              <p className='text-center text-secondary'>Produk tidak tersedia</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
