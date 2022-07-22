import Navbar from '../components/Navbar';
import BidderInfo from '../components/seller/BidderInfo';
import { ProductProvider } from '../services/productService';

export default function BidderPage () {
  return (
    <ProductProvider>
      <Navbar/>
      <BidderInfo />
    </ProductProvider>
  )
}