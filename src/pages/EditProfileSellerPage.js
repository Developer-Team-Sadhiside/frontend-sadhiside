import Navbar from '../components/Navbar'
import EditProfileSeller from '../components/seller/EditProfileSeller'
import { ProductProvider } from '../services/productService'

export default function EditProfileSellerPage () {
  return (
    <ProductProvider>
      <Navbar/>
      <EditProfileSeller/>
    </ProductProvider>
  )
}