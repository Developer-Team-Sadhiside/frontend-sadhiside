import SellerProfile from "../components/seller/SellerProfile";
import Navbar from "../components/Navbar";
import CategorySeller from "../components/seller/CategorySeller";

export default function DashboardSellerPage() {
  return (
    <>
      <Navbar />
      <SellerProfile />
      <CategorySeller />
    </>
  );
}