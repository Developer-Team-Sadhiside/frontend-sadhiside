import Navbar from '../components/Navbar'
import RegisterAsSeller from '../components/seller/RegisterAsSeller'
import { ProductProvider } from '../services/productService'

export default function RegisterAsSellerPage () {
  return (
    <ProductProvider>
      <Navbar/>
      <RegisterAsSeller/>
    </ProductProvider>
  )
}