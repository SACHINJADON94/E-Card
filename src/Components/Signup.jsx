import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
  
  <div className="container mt-5 ">
    <div className="row justify-content-center">
      <div className="col-lg-8 col-md-10 col-sm-12">
        <div className="card border-0 shadow">
          <div className="card-header bg-primary text-white">
            <h2 className="mb-0 text-center">User Signup</h2>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="font-weight-bold">User Name <span className="errmsg">*</span></label>
                    <input type="text" className="form-control" placeholder="Enter User Name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="font-weight-bold">Password <span className="errmsg">*</span></label>
                    <input type="password" className="form-control" placeholder="Enter Password" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="font-weight-bold">Full Name <span className="errmsg">*</span></label>
                    <input type="text" className="form-control" placeholder="Enter Full Name" />
                  </div>
                </div>
                <div className="col-lg-6">
                <div className="form-group">
                  <label className="font-weight-bold">Email <span className="errmsg">*</span></label>
                  <input type="email" className="form-control" placeholder="Enter Email" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="font-weight-bold">Phone <span className="errmsg">*</span></label>
                  <input type="number" className="form-control" placeholder="Enter Phone Number" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="font-weight-bold">State <span className="errmsg">*</span></label>
                  <select className="form-control">
                    <option value="uttrakhand">Uttrakhand</option>
                    <option value="up">U.P</option>
                    <option value="haryana">Haryana</option>
                    <option value="punjab">Punjab</option>
                    <option value="rajasthan">Rajasthan</option>
                  </select>
                </div>
              </div>
           <div className="col-lg-12">
                <div className="form-group">
                  <label className="font-weight-bold">Address <span className="errmsg">*</span></label>
                  <textarea className="form-control"></textarea>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label className="font-weight-bold">Gender</label>
                  <br></br>
                  <input type="radio" name="gender" value="male" className="app-check"></input>
                  <label>Male</label>
                  <input type="radio" name="gender" value="female" className="app-check"></input>
                  <label>Female</label>
                </div>
              </div>
            </div>
          </form>
        </div>
          <div className="card-footer bg-white border-0">
          <button type="submit" className="btn btn-primary btn-lg w-100 mb-2">Signup</button>
          <Link to={'/login'} className="btn btn-danger btn-lg w-100">Close</Link>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
