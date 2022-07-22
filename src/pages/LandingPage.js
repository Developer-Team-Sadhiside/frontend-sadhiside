import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import CardCollection from '../components/ProductCard';
import SellButton from '../components/SellButton';
import FilterButton from '../components/FilterButton';
import { ProductProvider } from '../services/productService';

export default function LandingPage() {
  return (
    <>
      <ProductProvider>
        <Navbar />
        <Carousel />
        <FilterButton />
        <CardCollection />
        <SellButton />
      </ProductProvider>
    </>
  );
}
