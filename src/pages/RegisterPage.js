import Register from '../components/Register';
import { RegisterProvider } from '../services/registerService';

export default function RegisterPage() {
  return (
  <RegisterProvider>
    <Register />
  </RegisterProvider>
  );
}
