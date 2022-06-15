import React from 'react'
import {Link} from 'react-router-dom';
import '../../css/style.css'

const Login = () => {
return (
<div className="d-lg-flex half">
	<div className="bg order-1 order-md-2" style={{backgroundImage: 'url("images/secondhand.png")'}} />
	<div className="contents order-2 order-md-1">
		<div className="container">
			<div className="row align-items-center justify-content-center">
				<div className="col-md-7">
					<div className="mb-4">
						<h3>Masuk</h3>
					</div>
					<form action="#" method="post">
						<div className="form-group first">
							<label htmlFor="username">Username</label>
							<input type="text" className="form-control" id="username" />
						</div>
						<div className="form-group last mb-3">
							<label htmlFor="password">Password</label>
							<input type="password" className="form-control" id="password" />
						</div>
						<div className="d-flex mb-5 align-items-center">
							<label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
								<input type="checkbox" defaultChecked="checked" />
								<div className="control__indicator" />
							</label>
							<span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>
						</div>
						<input type="submit" defaultValue="Log In" className="btn btn-block btn-primary" />
						<span className="d-block text-center my-4 text-muted">Belum Punya Akun ?
							<Link to="/register">Daftar di sini</Link></span>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
)
}

export default Login