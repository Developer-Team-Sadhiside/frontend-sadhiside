import { useState } from 'react';
import Card from './Card';

const CardCollection = () => {
  const [product, setProduct] = useState([
    {
      image:
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/9/3/8c21ca6b-7dc6-4b5c-986c-2adbbd3050fe.jpg',
      title: 'Jaket Vintage Penuh Gaya Modis',
      category: 'Baju',
      price: 250000,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPOyg6P1RT7rdpTApuhwTyafXpE_bbKyeKmOUGYJfr4p0WNvTVaLFrYgjlBBhLyhukrk&usqp=CAU',
      title: 'Jaket 2',
      category: 'Baju',
      price: 250000,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn6oCRdvDl03-W6OaXFLvQA4IscJlycbC1H9nsS5VlVDtwARQ1f7WQjLgdDZTa0INEQTo&usqp=CAU',
      title: 'Jaket 3',
      category: 'Baju',
      price: 250000,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gQDEjkFXOBBJTTDJPUA7xeqFjJKa5lYqDw&usqp=CAU',
      title: 'Jaket 4',
      category: 'Baju',
      price: 250000,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqfcR2yRFG1Ybm0TEEADcbD_0XAFs9bKesA&usqp=CAU',
      title: 'Jaket 4',
      category: 'Baju',
      price: 250000,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStmjASQTTCm1oT3nT24izwdtcsLuoIydoquQ&usqp=CAU',
      title: 'Jaket 4',
      category: 'Baju',
      price: 250000,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJe273hZveA1iEayWPOqGzjipOftsMVnaXeQ&usqp=CAU',
      title: 'Jaket 4',
      category: 'Baju',
      price: 250000,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc4TDWo8atvAJxCz0VWrZeBpxz6mSB80uFXw&usqp=CAU',
      title: 'Jaket 4',
      category: 'Baju',
      price: 250000,
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyCETkd6SmIT_S7F7jczYjWul0ROgr7i269w&usqp=CAU',
      title: 'Jaket 4',
      category: 'Baju',
      price: 250000,
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

export default CardCollection;
