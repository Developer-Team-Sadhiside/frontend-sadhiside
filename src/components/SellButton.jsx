import '../assets/styles/SellButton.css'

export default function SellButton() {
  return (
    <a href='' className='start-sell-link'>
      <button className='fixed-bottom container start-sell-link-button'>
        <img src='/svg/fi_plus-white.svg' alt='Plus Icon' /> Jual
      </button>
    </a>
  );
}
