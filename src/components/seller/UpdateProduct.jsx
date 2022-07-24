import '../../assets/styles/UpdateProduct.css';
import { useRef, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductPreview from './ProductPreview';
import axios from 'axios';
import { useProductContext } from '../../services/productService';

export default function UpdateProduct() {
  const [editMode, setEditMode] = useState(false);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState();
  const [gambar, setGambar] = useState('');

  const productContext = useProductContext();

  const params = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef();

  async function getProduct() {
    const result = await productContext.getProductById(params.id);
    setProduct(result.product.produk);
  }

  const loadImage = (e) => {
    const image = e.target.files[0];
    setGambar(image);
    setPreview(URL.createObjectURL(image));
  };

  function updateProduct(data, changes) {
    if (changes === 'nama_produk') setProduct({ ...product, nama_produk: data });
    else if (changes === 'harga_produk') setProduct({ ...product, harga_produk: data });
    else if (changes === 'deskripsi') setProduct({ ...product, deskripsi: data });
  }

  useEffect(() => {
    if (gambar) {
      const reader = new FileReader();
      reader.readAsDataURL(gambar);
      reader.onload = function (e) {
        setPreview(reader.result);
      };
    } else {
      setPreview(null);
    }
    getProduct();
  }, [gambar]);

  async function updateProductSave(id, product) {
    const formData = new FormData();
    formData.append('gambar', gambar);
    formData.append('nama_produk', product.nama_produk);
    formData.append('harga_produk', product.harga_produk);
    formData.append('kategori', product.kategori);
    formData.append('deskripsi', product.deskripsi);

    const token = localStorage.getItem('token');
    await axios.put(`https://secondhand-shadiside.herokuapp.com/api/v1/product/${id}`, formData, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    navigate('/dashboard/seller');
    return true;
  }

  return (
    <>
      {editMode ? (
        <div>
          <ProductPreview imagePreview={preview} toggleEdit={setEditMode} products={product} publish={updateProductSave} />
        </div>
      ) : (
        <>
          <div className='create-product-container container mt-3'>
            <div className='row justify-content-sm-center g-0'>
              <div
                className='col-sm-1'
                onClick={() => {
                  navigate('/dashboard/seller');
                }}
              >
                <img src='/svg/fi_arrow-left.svg' alt='' className='back' />
              </div>
              <div className='col-sm-6'>
                <div className='create-product-form'>
                  <form>
                    <label className='create-product-label'>Nama Produk</label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Nama Produk'
                      value={product?.nama_produk ?? 'Loading...'}
                      onChange={(event) => {
                        updateProduct(event.target.value, 'nama_produk');
                      }}
                    />
                    <label className='create-product-label'>Harga Produk</label>
                    <input
                      onChange={(event) => {
                        updateProduct(event.target.value, 'harga_produk');
                      }}
                      className='form-control'
                      placeholder={`Rp 0.00`}
                      value={product?.harga_produk ?? 'Loading...'}
                    />
                    <label className='create-product-label'>Kategori</label>
                    <select class='form-control' value={product?.kategori}>
                      <option>Hobi</option>
                      <option>Kendaraan</option>
                      <option>Baju</option>
                      <option>Elektronik</option>
                      <option>Kesehatan</option>
                    </select>
                    <label className='create-product-label'>Deskripsi</label>
                    <textarea
                      onChange={(event) => {
                        updateProduct(event.target.value, 'deskripsi');
                      }}
                      type='text'
                      className='form-control description'
                      placeholder='Contoh: Jalan Ikan Hiu 33'
                      value={product?.deskripsi ?? 'Loading...'}
                    ></textarea>
                    <label className='create-product-label'>Foto Produk</label>
                    <div className='row'>
                      <div className='col-2'>
                        <div
                          className='picture'
                          onChange={loadImage}
                          onClick={() => {
                            fileInputRef.current.click();
                          }}
                        >
                          {preview ? <img src={preview} alt='' className='image-uploaded' /> : <img src='/svg/fi_plus.svg' alt='' className='plus-svg' />}
                        </div>
                        <input
                          type='file'
                          className='form-control'
                          style={{ display: 'none' }}
                          ref={fileInputRef}
                          accept='image/*'
                          onChange={(event) => {
                            const gambar = event.target.files[0];
                            if (gambar) {
                              setGambar(gambar);
                            } else {
                              setGambar(null);
                            }
                          }}
                        />
                      </div>
                      <div className='col-2'>
                        {/* <div>
                          <img src={product?.gambar[0]} alt='' className='image-uploaded' />
                        </div> */}
                      </div>
                    </div>
                    <input type='file' className='form-control' style={{ display: 'none' }} accept='image/*' />
                    <div className='row mt-4' type='submit'>
                      <button
                        className='col preview'
                        type='submit'
                        onClick={() => {
                          setEditMode(true);
                        }}
                      >
                        Preview
                      </button>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          setLoading(true);
                          updateProductSave(product.id, product);
                        }}
                        className='col terbitkan'
                        type='submit'
                      >
                        {loading ? <>Uploading...</> : <>Terbitkan</>}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className='col-sm-1'></div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
