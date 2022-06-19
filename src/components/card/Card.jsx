import './Card.css';

const Card = ({ image, title, category, price }) => {
  return (
    <div className='card-product col-sm-2'>
      <img
        className='card-img-top'
        src={image}
      />
      <div className=''>
        <h5 className='product-title'>{title}</h5>
        <p className='product-category'>{category}</p>
        <p className='price-product'>Rp {price.toLocaleString("id-ID")}</p>
      </div>
    </div>
  );
};

export default Card;
