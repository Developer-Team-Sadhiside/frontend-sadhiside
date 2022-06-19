import React from 'react'
import "./profile.css"
import AvatarImageCropper from "react-avatar-image-cropper";

const Profile = () => {
	const apply = file => {
    console.log(file);
  };

	return (	
		<div className='profile-container'>
			<div className='mt-4'
					style={{
						backgroundImage:
							'/images/profile-kosong.png',
						width: "250px",
						height: "250px",
						borderRadius: "16px",
						margin:"0px 150px"
					}}
    	>
      	<AvatarImageCropper apply={apply} isBack={true} />
    	</div>
			<form>
				<div className='profile-form mt-4'>
						<label className='form-label' htmlFor='nama'>Nama*</label>
						<input type='text' className='form-control' placeholder='Nama' id='nama-lengkap' />
						<label className='form-label mt-4' htmlFor='kota'>Kota*</label>
						<select class="form-select" id="inlineFormSelectPref">
							<option selected>Pilih Kota</option>
							<option value="1">Surabaya</option>
							<option value="2">Yogyakarta</option>
							<option value="3">Jakarta</option>
						</select>
						<label className='form-label mt-4' htmlFor='alamat'>Alamat*</label>
						<input type='text' className='form-control' style={{ height: "80px", fontSize: "14px" }} placeholder='Contoh: Jalan Ikan Hiu 33' id='alamat' />
						<label className='form-label mt-4' htmlFor='no-hp'>No Handphone*</label>
						<input type='text' className='form-control' placeholder='contoh: +628123456789' id='no-hp' />
				</div>
					<div className='justify-content-center mb-5'>
						<button type="button" className='btn btn-simpan' style={{ color: "#FFFFFF" }}>Simpan</button>
					</div>
			</form>
		</div>
	)
}

export default Profile
