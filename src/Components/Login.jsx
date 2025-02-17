import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="row justify-content-center">
  <div className="col-lg-6 col-md-8 col-sm-10 mt-5">
    <div className="card border-0 shadow">
      <div className="card-header bg-primary text-white">
        <h2 className="mb-0 text-center">User Login</h2>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>User Name</label>
            <input type="text" className="form-control" placeholder="Enter User Name" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter Password" />
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="rememberMe" />
              <label className="custom-control-label" htmlFor="rememberMe">Remember Me</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
          <p className="text-center mt-3">
            New User? <Link to={'/signup'}>Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  </div>

    </div>
  )
}
