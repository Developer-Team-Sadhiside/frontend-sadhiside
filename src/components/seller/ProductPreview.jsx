import "../../assets/styles/ProductPreview.css";
import { dummyUsers } from "../../assets/dumps/users";
import { dummyProducts } from "../../assets/dumps/products";
import OfferModal from "../buyer/OfferModal";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export function ProductCarouselPreview(props) {
  const token = localStorage.getItem("token");
  const [gambar, setGambar] = useState("");
  const { id } = useParams();

  const domain = 'https://secondhand-shadiside.herokuapp.com'

  useState(async () => {
    const response = await axios.get(`${domain}/api/v1/getOneProduct/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    setGambar(response.data.produk.gambar);
  });
  return (
    <div id="productCarouselPreviewControl" className="carousel slide product-carousel-preview">
      <div className="carousel-inner product-carousel-image-preview">
        <div className="carousel-item active">
          <img src={gambar} className="product-carousel-image-size-preview" />
        </div>
        <div className="carousel-item">
          <img src={gambar} className="product-carousel-image-size-preview" />
        </div>
      </div>
      <div className="product-carousel-button-preview">
        <button className="carousel-control-prev" data-bs-target="#productCarouselPreviewControl" data-bs-slide="prev">
          <img src="/svg/fi_product-button-prev-preview.svg" alt="Previous Button" className="product-carousel-button-size-preview" />
        </button>
        <button className="carousel-control-next" data-bs-target="#productCarouselPreviewControl" data-bs-slide="next">
          <img src="/svg/fi_product-button-next-preview.svg" alt="Next Button" className="product-carousel-button-size-preview" />
        </button>
      </div>
    </div>
  );
}

export function ProductDescriptionPreview(props) {
  const token = localStorage.getItem("token");

  const [deskripsi, setDeskripsi] = useState("");
  const { id } = useParams();

  useState(async () => {
    const response = await axios.get(`${domain}/api/v1/getOneProduct/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setDeskripsi(response.data.produk.deskripsi);
  });
  return (
    <div className="product-description-preview">
      <h3 className="product-description-heading-preview">Deskripsi</h3>
      <p className="product-description-description-preview">{deskripsi}</p>
    </div>
  );
}

export function EditButtonPreview() {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const navigate = useNavigate();

  useState(async () => {
    const response = await axios.get(`${domain}/api/v1/getOneProduct/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(response.data.produk);
  });
  return (
    <button
      type="submit"
      className="product-card-button-edit-preview"
      onClick={() => {
        navigate(`/products/seller/preview/${id}`);
      }}
    >
      Edit
    </button>
  );
}

export function EditButton() {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const navigate = useNavigate();

  useState(async () => {
    const response = await axios.get(`${domain}/api/v1/getOneProduct/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(response.data.produk);
  });
  return (
    <button
      className="product-card-button-edit-preview"
      onClick={() => {
        navigate(`/products/seller/update/${id}`);
      }}
    >
      Edit
    </button>
  );
}

export function PurpleButton(props) {
  const navigate = useNavigate();
  return (
    <button
      type="submit"
      className="product-card-button-publish-preview"
      onClick={() => {
        navigate(`/dashboard/seller`);
      }}
      data-bs-toggle="modal"
      data-bs-target={`#${props.idModal}`}
    >
      Terbitkan
    </button>
  );
}

export function ProductCardPreview(props) {
  const token = localStorage.getItem("token");

  const [nama_produk, setNama_Produk] = useState("");
  const [harga_produk, setHarga_Produk] = useState("");
  const [kategori, setKategori] = useState("");
  const { id } = useParams();

  useState(async () => {
    const response = await axios.get(`${domain}/api/v1/getOneProduct/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setNama_Produk(response.data.produk.nama_produk);
    setKategori(response.data.produk.kategori);
    setHarga_Produk(response.data.produk.harga_produk);
  });

  return (
    <div className="product-card-preview">
      <p className="product-card-heading-preview">{nama_produk}</p>
      <p className="product-card-category-preview">{kategori}</p>
      <p className="product-card-price-preview">Rp. {harga_produk}</p>
      <div className="product-card-button-preview">
        {props.params.id ? (
          <>
            <PurpleButton content="Saya Tertarik dan Ingin Nego" idModal={props.idModal} />
            <OfferModal idModal={props.idModal} products={props.products} params={props.params} />
          </>
        ) : (
          <div>
            <PurpleButton content="" />
            <EditButton />
          </div>
        )}
      </div>
    </div>
  );
}

export function UserCardPreview(props) {
  const token = localStorage.getItem("token");

  const [nama, setNama] = useState("");
  const [foto, setFoto] = useState("");
  const [kota, setKota] = useState("");
  const { id } = useParams();

  useState(async () => {
    const response = await axios.get(`${domain}/api/v1/getOneProduct/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setNama(response.data.produk.User.nama);
    setKota(response.data.produk.User.kota);
    setFoto(response.data.produk.User.foto);
  });
  return (
    <div className="user-card-preview row g-0">
      <div className="user-card-image-preview col-sm-3">
        <img src={foto} alt="User Image" className="col-sm-3 user-card-image-size-preview" />
      </div>
      <div className="col user-card-identity-preview">
        <div className="user-card-identity-name-preview">{nama}</div>
        <div className="user-card-identity-city-preview">{kota}</div>
      </div>
    </div>
  );
}

export default function ProductPreview() {
  const [products, setProduct] = useState(dummyProducts);
  const [users, setUsers] = useState(dummyUsers);
  const params = useParams();

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-1">
          <ProductCarouselPreview products={products} params={{ dummyId: 1 }} />
          <ProductDescriptionPreview products={products} params={{ dummyId: 1 }} />
        </div>
        <div className="col-md-4">
          <ProductCardPreview idModal={`offerModal${products[1].id}`} products={products} params={{ dummyId: 1 }} />
          <UserCardPreview users={users} params={{ dummyId: 1 }} />
        </div>
      </div>
    </div>
  );
}
