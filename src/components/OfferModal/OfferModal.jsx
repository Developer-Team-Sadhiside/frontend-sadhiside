import React from "react";
import "../../assets/styles/OfferModal.css";
import { useState } from "react";

function OfferModal() {
  const [tawar] = useState();
  return (
    <div>
      <div className="modal fade" id="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="body mx-5 my-4 mt-4">
              <p className="fw-bold">Masukkan Harga Tawarmu</p>
              <p>
                Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu
                akan segera dihubungi penjual.
              </p>
              <div className="card_border_tawar card mt-2 rounded-4">
                <div className="card_tawar card-body">
                  <img src="/images/produk-tawar.png" />
                  <div className="col-lg-8 mx-3">
                    <p className="fw-bold mt-1">Jam Tangan Casio</p>
                    <div className="text_modal">Rp 250.000</div>
                  </div>
                </div>
              </div>
              <p className="mt-3">Harga Tawar</p>
              <p className="mt-3">{tawar}</p>
              <input
                type="harga_tawar"
                id="harga_tawar"
                placeholder="Rp 0,00"
                className="input_modal form-control"
                autoComplete="true"
                data-testid="input-harga_tawar"
              />
            </div>
            <button type="button" className="btn-kirim mx-5 my-4 mt-1  ">
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferModal;
