import { useState } from 'react';
import './Card.css'

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
  const [product, setProduct] = useState([
    {
      image:
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/9/3/8c21ca6b-7dc6-4b5c-986c-2adbbd3050fe.jpg',
      title: 'Jaket Vintage Penuh Gaya Modis',
      category: 'Baju',
      price: 150000,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPOyg6P1RT7rdpTApuhwTyafXpE_bbKyeKmOUGYJfr4p0WNvTVaLFrYgjlBBhLyhukrk&usqp=CAU',
      title: 'Jaket Biru Navy',
      category: 'Baju',
      price: 50000,
    },
    {
      image:
        'https://cdn.keepo.me/images/post/lists/2020/04/06/main-list-image-5639c38f-55ff-4ae1-b1d9-a5e49974c342-1.jpg',
      title: 'Batu Pikat Wanita',
      category: 'Hobi',
      price: 2550000,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49Htt4tpbtvZOmbaf0HVbhkvGnjVu7PYMOg&usqp=CAU',
      title: 'RX King Pemerintah',
      category: 'Kendaraan',
      price: 5550000,
    },
    {
      image:
        'https://irawanah.files.wordpress.com/2014/06/radio-panasonic-rl-4249-mk3.jpg',
      title: 'Radio Jadul Tahun 1993',
      category: 'Elektronik',
      price: 350000,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStmjASQTTCm1oT3nT24izwdtcsLuoIydoquQ&usqp=CAU',
      title: 'Jaket Putih',
      category: 'Baju',
      price: 55000,
    },
    {
      image: 'https://s2.bukalapak.com/img/20743299592/large/data.jpeg',
      title: 'Kaset Jadul',
      category: 'Elektronik',
      price: 25000,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR65potKc5YhpxjtSigIfwLJEQ_SWXZFiLH7cgnzVEdnwOncJ_LvkHx3BCKob13rLYBlHg&usqp=CAU',
      title: 'Gunting',
      category: 'Kesehatan',
      price: 50000,
    },
    {
      image:
        'https://v-images2.antarafoto.com/alat-kesehatan-bekas-lxsg2d-prv.jpg',
      title: 'Kursi Roda untuk Kakek',
      category: 'Kesehatan',
      price: 450000,
    },
  ]);

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