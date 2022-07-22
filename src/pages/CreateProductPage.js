import Navbar from '../components/Navbar';
import CreateProduct from '../components/seller/CreateProduct'
import { ProductProvider } from '../services/productService';

export default function CreateProductPage () {
  return (
    <ProductProvider>
      <Navbar/>
      <CreateProduct />
    </ProductProvider>
  )
}