import Navbar from '../components/Navbar';
import Banner from '../components/Carousel';
import { IMAGES } from '../assets/dumps/banner';
import CardCollection from '../components/CardProduct';
import FilterButton from '../components/FilterButton';
import SellButton from '../components/SellButton';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Banner images={IMAGES} slidesToShow={5} />
      <FilterButton />
      <CardCollection />
      <SellButton />
    </>
  );
}
