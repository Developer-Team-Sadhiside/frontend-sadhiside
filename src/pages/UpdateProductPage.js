import Navbar from '../components/Navbar';
import UpdateProduct from '../components/seller/UpdateProduct';
import { ProductProvider } from '../services/productService';

export default function UpdateProductPage () {
  return (
    <ProductProvider>
      <Navbar/>
      <UpdateProduct />
    </ProductProvider>
  )
}