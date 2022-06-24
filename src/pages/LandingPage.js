import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import CardCollection from '../components/CardProduct';
import FilterButton from '../components/FilterButton';
import SellButton from '../components/SellButton';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Carousel />
      <FilterButton />
      <CardCollection />
      <SellButton />
    </>
  );
}
