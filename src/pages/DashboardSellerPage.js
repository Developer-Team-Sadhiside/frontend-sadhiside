import SellerProfile from "../components/seller/SellerProfile";
import Navbar from "../components/Navbar";
import CategorySeller from "../components/seller/CategorySeller";
import { ProductProvider } from '../services/productService';

export default function DashboardSellerPage() {
  return (
    <ProductProvider>
      <Navbar />
      <SellerProfile />
      <CategorySeller />
    </ProductProvider>
  );
}