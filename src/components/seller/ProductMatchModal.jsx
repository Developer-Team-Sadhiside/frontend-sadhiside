import '../../assets/styles/ProductMatchModal.css';
import { useProductContext } from '../../services/productService';

export default function ProductMatchModal(props) {
  const productContext = useProductContext();
  return (
    <>
      <div className='modal fade' id={props.idModal} tabIndex={-1} aria-labelledby='productMatchModalLabel' aria-hidden='true'>
        <div className='modal-dialog modal-dialog-centered product-match-dialog-modal'>
          <div className='modal-content product-match-container-modal'>
            <div className='modal-header product-match-header-modal'>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
            </div>
            <div className='modal-body product-match-body-modal'>
              <p className='product-match-body-title-modal'>Yeay kamu berhasil mendapat harga yang sesuai</p>
              <p className='product-match-body-alert-modal'>Segera hubungi pembeli melalui Whatsapp untuk transaksi selanjutnya</p>
              <div className='product-match-body-card-modal px-3'>
                <p className='text-center product-match-body-message-modal'>Product Match</p>
                <div className='row g-0'>
                  <div className='col-sm-3'>
                    <img className='product-match-body-card-img-modal' src={props?.data?.User?.foto} alt='' />
                  </div>
                  <div className='col'>
                    <p className='product-match-body-card-buyer-name-modal'>{props?.data?.User?.nama}</p>
                    <p className='product-match-body-card-buyer-city-modal'>{props?.data?.User?.kota}</p>
                  </div>
                </div>
                <div className='row g-0 mt-2'>
                  <div className='col-sm-3'>
                    <img className='product-match-body-card-img-modal' src={props?.data?.Product?.gambar[0]} alt='' />
                  </div>
                  <div className='col'>
                    <p className='product-match-body-card-product-modal'>{props?.data?.Product?.nama_produk}</p>
                    <p className='product-match-body-card-product-modal'>
                      <s>Rp {props?.data?.Product?.harga_produk.toLocaleString('id-ID')}</s>
                    </p>
                    <p className='product-match-body-card-product-modal'>Ditawar Rp. {props?.data?.harga_tawar.toLocaleString('id-ID')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='modal-footer row product-match-footer mt-3'>
              <button className='product-match-footer-button' data-bs-dismiss='modal'>
                <a
                  onClick={() => {
                    productContext.getDetailProductOffer(props.idBidder);
                    window.location.reload();
                  }}
                  style={{ textDecoration: 'none', color: '#ffffff' }}
                  target='_blank'
                  href={`https://api.whatsapp.com/send/?phone=62${props?.data?.User?.no_hp.substring(1)}&text&type=phone_number&app_absent=0`}
                >
                  Hubungi Via Whatsapp
                </a>
                <img className='ms-2 mb-1' src='/svg/fi_whatsapp.svg' alt='' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
