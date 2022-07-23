
import Navbar from "../components/Navbar";
import SaveList from "../components/SaveList";
import { ProductProvider } from '../services/productService';

export default function SaveListPage() {
  return (
    <ProductProvider>
      <Navbar />
      <SaveList />
    </ProductProvider>
  );
}