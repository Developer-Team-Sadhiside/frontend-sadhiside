import ProductPreview from '../components/ProductPreview';
import Navbar from '../components/Navbar';
import { ProductProvider } from '../services/productService';

export default function ProductPreviewPage() {
  return (
    <>
      <ProductProvider>
        <Navbar />
        <ProductPreview />
      </ProductProvider>
    </>
  );
}
