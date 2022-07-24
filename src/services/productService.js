import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductContext = createContext();

export function useProductContext() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [toggleFilter, setToggleFilter] = useState(true);
  const [productsOffered, setProductsOffered] = useState([]);

  const navigate = useNavigate();
  const domain = 'https://secondhand-shadiside.herokuapp.com';

  useEffect(() => {
    getProducts();
  }, []);

  function checkUserLogin() {
    if (localStorage.getItem('token')) return true;
    else return false;
  }

  async function getProducts() {
    if (checkUserLogin()) {
      const token = localStorage.getItem('token');
      let result = await fetch(`${domain}/api/v1/listAllProducts/like`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      result = await result.json();
      setProducts(result.produk);
      return;
    }
    let result = await fetch(`${domain}/api/v1/listAllProducts/Unregister`, {
      method: 'GET',
    });
    let data = [];
    result = await result.json();
    result.produk.map((value) => {
      value.Likes = [{ isLike: false }];
      data.push(value);
    });
    setProducts(data);
  }

  const filterProduct = (category) => {
    if (category === 'Semua') {
      setToggleFilter(true);
      getProducts();
    } else if (category !== 'Semua') {
      setToggleFilter(false);
      const data = products;
      const product = [];
      data?.map((value) => {
        if (value.kategori === category) {
          product.push(value);
          setFilteredProducts(product);
        } else {
          setFilteredProducts(product);
        }
      });
      return category;
    }
  };

  const filterProductBySearch = (data) => {
    const text = data.toLowerCase();
    setToggleFilter(false);
    const product = [];
    const productsDummy = products;
    productsDummy.map((value) => {
      if (`${value.nama_produk} ${value.kategori} ${value.deskripsi}`.toLowerCase().includes(text)) {
        product.push(value);
      }
    });
    setFilteredProducts(product);
  };

  async function productLikeHandler(id) {
    if (!checkUserLogin()) {
      navigate('/login');
    } else {
      const token = localStorage.getItem('token');
      let result = await fetch(`${domain}/api/v1/likes/${id}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      result = await result.json();
      getProducts();
    }
  }

  async function getProductById(id) {
    if (!checkUserLogin()) {
      navigate('/login');
    } else {
      const token = localStorage.getItem('token');
      let product = await fetch(`${domain}/api/v1/getOneProduct/${id}`, {
      //let product = await fetch(`http://localhost:8000/api/v1/getOneProductWhenOffer/${id}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      product = await product.json();
      return { product };
    }
  }

  async function bidProduct(id, offerPrice) {
    if (!checkUserLogin()) {
      navigate('/login');
    } else {
      const item = { harga_tawar: offerPrice };
      const token = localStorage.getItem('token');
      let result = await fetch(`${domain}/api/v1/buy/product/${id}`, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (result.status === 201) return true;
      else return false;
    }
  }

  async function getProductsOffered() {
    if (!checkUserLogin()) {
      navigate('/login');
    } else {
      const token = localStorage.getItem('token');

      let result = await fetch(`${domain}/api/v1/users/whoAmI`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      result = await result.json();

      if (result?.user?.role[1] === 'seller') {
        let result = await fetch(`${domain}/api/v1/history/buyer/listProductsOffered`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        result = await result.json();
        setProductsOffered(result.data);
      }
    }
  }

  async function getDetailProductOffer(id) {
    if (!checkUserLogin()) {
      navigate('/login');
    } else {
      const token = localStorage.getItem('token');
      let result = await fetch(`${domain}/api/v1/history/seller/detailOffer/${id}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      result = await result.json();
      return result;
    }
  }

  async function acceptOfferProduct(id) {
    if (!checkUserLogin()) {
      navigate('/login');
    } else {
      const token = localStorage.getItem('token');
      let result = await fetch(`${domain}/api/v1/history/seller/acceptOffer/${id}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return true;
    }
  }

  async function rejectOfferProduct(id) {
    console.log(id);
    if (!checkUserLogin()) {
      navigate('/login');
    } else {
      const token = localStorage.getItem('token');
      let result = await fetch(`${domain}/api/v1/history/seller/rejectOffer/${id}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return true;
    }
  }

  const productsContextValue = {
    products,
    setProducts,
    filterProduct,
    filteredProducts,
    toggleFilter,
    filterProductBySearch,
    productLikeHandler,
    getProductById,
    bidProduct,
    getProductsOffered,
    productsOffered,
    getDetailProductOffer,
    acceptOfferProduct,
    rejectOfferProduct
  };

  return <ProductContext.Provider value={productsContextValue}>{children}</ProductContext.Provider>;
}
