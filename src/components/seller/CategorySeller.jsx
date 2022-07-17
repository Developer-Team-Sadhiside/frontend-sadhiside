import React, {useState, useEffect } from 'react'
import "../../assets/styles/CategorySeller.css"
import { useNavigate, Link } from 'react-router-dom'
import { ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
import axios from "axios";


const CategorySeller = () => {
const token = localStorage.getItem('token');
const [all, setAll] = useState(true)
const [like, setLike] = useState(false)
const [sell, setSell] = useState(false)
const [productsSeller, setProductsSeller] = useState([]);

const navigate = useNavigate();
const [buttonGroup, setButtonGroup] = useState("Semua")

const colorActive = {
  color: '#7126B5',
};
const colorInactive = {
  color: 'black',
};


const handleAll = (e) =>{
  e.preventDefault()
  setAll(true)
  setLike(false)
  setSell(false)
}

const handleLike = (e) => {
  e.preventDefault()
  setAll(false)
  setLike(true)
  setSell(false)
}

const handleSell = (e) => {
  e.preventDefault()
  setAll(false)
  setLike(false)
  setSell(true)
}

useEffect(() => {
  getProductsSeller();
}, []);

const getProductsSeller = async () => {
  const response = await axios.get("http://localhost:8000/api/v1/listProducts/seller", {
    headers:{
      Authorization: 'Bearer ' + token,
    }
  });
  setProductsSeller(response.data.produk);
  console.log(response.data.produk);
}

return (
<div className='container' style={{ marginTop:'90px' }}>
  <div className='row'>
    <div className='col-lg-3 p-0 py-2' style={{ marginLeft:"85px" }}>
      <div className='category-product-list'>
        <ToggleButtonGroup type="radio" name="category-mobile-version" value={buttonGroup}
          className='button-group-custom' onChange={(event)=> {
          setButtonGroup(event)}}>
          <h6 className='mb-3 text-category'>Kategori</h6>
          <div id="radio-button-1" value={"Semua Produk"} onClick={handleAll}
            className='btn-group-category bb-category'>
            <div className='d-flex justify-content-center align-items-center' style={ all ? colorActive : colorInactive
              }>
              <i class="me-2 fa-solid fa-box"></i>
              <p className='m-0'>Semua Produk</p>
            </div>
            <i className="fa-solid fa-angle-right" style={ all ? colorActive : colorInactive }></i>
          </div>

          <div id="radio-button-2" value={"Diminati"} onClick={handleLike} className='btn-group-category bb-category'>
            <div className='d-flex justify-content-center align-items-center' style={ like ? colorActive : colorInactive
              }>
              <i className="me-2 fa-solid fa-heart"></i>
              <p className='m-0'>Diminati</p>
            </div>
            <i className="fa-solid fa-angle-right" style={ like ? colorActive : colorInactive }></i>
          </div>
          <div id="radio-button-3" value={"Terjual"} onClick={handleSell} className='btn-group-category'>
            <div className='d-flex justify-content-center align-items-center' style={ sell ? colorActive : colorInactive
              }>
              <i className="me-2 fa-solid fa-dollar-sign"></i>
              <p className='m-0'>Terjual</p>
            </div>
            <i className="fa-solid fa-angle-right" style={ sell ? colorActive : colorInactive }></i>
          </div>
        </ToggleButtonGroup>
        {console.log("Mobile Button Value: ", buttonGroup)}
      </div>
    </div>
    <div className="col-lg-9 p-0">
      <div className="row">
        {all && (<div className="col">
          <div className='add-product-box p-2 text-center text-secondary' onClick={()=>
            {navigate("/products/create")}}>
            <img src="/images/Plus_icon.png" style={{ width:"30px" }} className='mb-3' alt="" />
            <p>Semua Produk</p>
          </div>
          {productsSeller.map((productsSeller) => {
          console.log(productsSeller)
          return (
          <div className='card-product-seller col-sm-4' key={productsSeller.id}>
            <Link to="/products/preview/:id" style={{ textDecoration: 'none' }}>
            <div className='img-wrapper'>
              <img className='card-img-top-seller' src={productsSeller.gambar} />
            </div>
            <div>
              <h5 className='product-title-seller'>{productsSeller.nama_produk}</h5>
              <p className='product-category-seller'>{productsSeller.kategori}</p>
              <p className='price-product-seller'>Rp {productsSeller.harga_produk}</p>
            </div>
            </Link>
          </div>
          )
          })}
        </div>
        )}
        {like && (<div className="col">
          <div className='most-like'>
            <img src="/svg/empty-product-illustration.svg" className='mt-2' alt="" />
          </div>
        </div>)}
        {sell && (<div className="col">
          <div className='sold' onClick={()=>
            {navigate("/dashboard/seller/sell")}}>
          </div>
        </div>
        )}
      </div>
    </div>
  </div>
</div>
)
}

export default CategorySeller