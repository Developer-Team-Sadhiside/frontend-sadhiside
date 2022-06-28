import React, {useState} from 'react'
import "../../assets/styles/CategorySeller.css"
import { useNavigate } from 'react-router-dom'
import { ToggleButton, ToggleButtonGroup} from 'react-bootstrap';


const CategorySeller = () => {
const navigate = useNavigate();
const [buttonGroup, setButtonGroup] = useState("Semua")

return (
<div className='container' style={{ marginTop:'90px' }}>
  <div className='row'>
    <div className='col-lg-3 p-0 py-2' style={{ marginLeft:"85px" }}>
      <div className='category-product-list'>
        <ToggleButtonGroup type="radio" name="category-mobile-version" value={buttonGroup}
          className='button-group-custom' onChange={(event)=> {
          setButtonGroup(event)}}>
          <h6 className='mb-3 text-category'>Kategori</h6>
          <ToggleButton id="radio-button-1" value={"Semua Produk"}  className='btn-group-category bb-category'>
            <div className='d-flex justify-content-center align-items-center'>
              <img src="/images/Box_icon.png" className='me-2' style={{width: '25px'}} alt="" />
              <p className='m-0' >Semua Produk</p>
            </div>
            <img src="/images/Chevron-Right.png" className='right-arrow' style={{width: '25px'}} alt="" />
          </ToggleButton>
          <ToggleButton id="radio-button-2" value={"Diminati"} className='btn-group-category bb-category'>
            <div className='d-flex justify-content-center align-items-center'>
              <img src="/images/Heart_icon.png" className='me-2' style={{width: '25px'}} alt="" />
              <p className='m-0'>Diminati</p>
            </div>
            <img src="/images/Chevron-Right.png" className='right-arrow' style={{width: '25px'}} alt="" />
          </ToggleButton>
          <ToggleButton id="radio-button-3" value={"Terjual"} className='btn-group-category'>
            <div className='d-flex justify-content-center align-items-center'>
              <img src="/images/Dollar_icon.png" className='me-2' style={{width: '25px'}} alt="" />
              <p className='m-0'>Terjual</p>
            </div>
            <img src="/images/Chevron-Right.png" className='right-arrow' style={{width: '25px'}} alt="" />
          </ToggleButton>
        </ToggleButtonGroup>
        {console.log("Mobile Button Value: ", buttonGroup)}
      </div>
    </div>
    <div className="col-lg-9 p-0">
      <div className="row">
        <div className="col">
          <div className='add-product-box p-2 text-center text-secondary'onClick={()=>
            {navigate("/products/create")}}>
            <img src="/images/Plus_icon.png" style={{ width:"30px" }} className= 'mb-3' alt="" />
            <p>Tambah Produk</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)
}

export default CategorySeller
