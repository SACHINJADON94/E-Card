import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
                <div className="row">
                    <div className="offset-3 col-lg-6" style={{marginTop: '50px'}}>
                        <form className="container">
                        <div className="card">
                            <div className="card-header">
                                <h2 className='mb-3' style={{textAlign:'center'}}>User Login</h2>
                                <div className="card-header">
                        <div class="mb-3">
                                <label for="exampleInputUsername" class="form-label">User Name <span className="errmsg">*</span></label>
                                <input type="username" class="form-control" id="exampleInputusername" aria-describedby="usernameHelp"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address <span className="errmsg">*</span></label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password <span className="errmsg">*</span></label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <div className="card-header">
                            <button type="submit" class="btn btn-success w-100" style={{marginBottom:'10px'}}>Login</button>
                            <Link type="submit" class="btn btn-primary w-100" to={'/signup'}>Signup</Link>
                        </div>
                        </div>
                        </div>
                        </div>
                        </form>
                    </div>
                </div>
        </>
    )
}