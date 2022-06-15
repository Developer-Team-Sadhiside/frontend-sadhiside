import React from 'react'
import {Link} from 'react-router-dom';
import './login.css'
import './responsive.css'

const Login = () => {
return (
<div className="d-lg-flex half">
	<div className="bg order-1" style={{backgroundImage: 'url("images/secondhand.png")'}} />
	<div className="contents order-2 order-md-1">
		<div className="container">
			<div className="row align-items-center justify-content-center">
				<div className="col-md-7">
					<div className="mb-4">
						<h3 className='title-login' style={{ fontFamily:'Poppins' }}>Masuk</h3>
					</div>
					<form action="#" method="post">
						
						<div className="form-group first">
						<label>email</label>
							<input className="form-control" placeholder='Masukan Email' />
						</div>
						
						<div className="form-group last mt-5">
						<label>Password</label>		
							<input type="password" className="form-control" placeholder='Masukan Password' />
						</div>
						<div className="d-flex mb-5 align-items-center">
							<label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
								<input type="checkbox" />
								<div className="control__indicator" />
							</label>
							<span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>
						</div>
						<button type="submit" className='btn btn-block btn-primary' >Masuk</button>
						<span className="d-block text-center my-4">Belum Punya Akun ?
							 <Link to="/register" style={{ color: "#7126B5" }}> Daftar di sini</Link></span>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
)
}

export default Login