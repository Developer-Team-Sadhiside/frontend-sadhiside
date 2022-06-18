import './Card.css';

const Card = () => {
  return (
    <div className='container mt-5'>
      <div className='card-product  shadow-sm'>
        <img
          className='card-img-top'
          src='/images/jam-tangan.png'
          alt='Card image cap'
        />
        <div className='card-body'>
          <h5 className='product-title'>Jam Tangan Casio</h5>
          <p className='product-category'>Aksesoris</p>
          <p className='price-product'>Rp 250.000</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
