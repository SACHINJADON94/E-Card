import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <>
            <div className="row">
                <div className="offset-3 col-lg-6 mt-2" >
                    <form className="container">
                        <div className="card">
                            <div className="card-header">
                                <h2 className='mb-2' style={{ textAlign: 'center' }}>User Signup</h2>
                                <div className="card-header">
                                    <div class="mb-2">
                                        <label for="exampleInputUsername" class="form-label">User Name <span className="errmsg">*</span></label>
                                        <input type="username" class="form-control" id="exampleInputusername" aria-describedby="usernameHelp" />
                                    </div>
                                    <div class="mb-2">
                                        <label for="exampleInputPassword1" class="form-label">Password <span className="errmsg">*</span></label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-2">
                                        <label for="exampleInputUsername" class="form-label">Full Name <span className="errmsg">*</span></label>
                                        <input type="fullname" class="form-control" id="exampleInputusername" aria-describedby="usernameHelp" />
                                    </div>
                                    <div class="mb-2">
                                        <label for="exampleInputEmail1" class="form-label">Email <span className="errmsg">*</span></label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-2">
                                        <label for="exampleInputPhone" class="form-label">Phone <span className="errmsg">*</span></label>
                                        <input type="number" class="form-control" id="exampleInputPhone" aria-describedby="phoneHelp" />
                                    </div>
                                    <div class="mb-2">
                                        <div class="dropdown">
                                            <label class="form-label" type="text" data-bs-toggle="dropdown">State</label>
                                            <select className="form-control">
                                                <option value="u.p">U.P</option>
                                                <option value="bihar">Bihar</option>
                                                <option value="panjab">Panjab</option>
                                                <option value="haryana">Haryana</option>
                                            </select>
                                        </div>
                                    </div>
                                <div class="mb-2">
                                    <label for="exampleInputaddress" class="form-label">Address</label>
                                    <input type="address" class="form-control" id="exampleInputaddress" aria-describedby="addressHelp" />
                                </div>
                                <div class="mb-2">
                                <label for="exampleInputgender" class="form-label">Gender</label>
                                <br></br>
                                    <input type="radio" name="gender" value="male" className="app-check"></input>
                                    <label className="for-label"> Male</label>
                                        <input type="radio" name="gender" value="female" className="app-check"></input>
                                        <label className="for-label"> Female</label>
                                        <input type="radio" name="gender" value="other" className="app-check"></input>
                                        <label className="for-label"> other</label>
                                    </div>
                                <div className="card-header">
                                    <button type="submit" class="btn btn-primary w-100" style={{ marginBottom: '10px' }}>Signup</button>
                                    <Link to={'/login'} className="btn btn-danger w-100">Close</Link>
                                </div>
                            </div>
                        </div>
                </div>
            </form>
        </div >
                </div >
        </>
    )
}











// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Signup() {
//   return (
  
//   <div className="container mt-5 ">
//     <div className="row justify-content-center">
//       <div className="col-lg-8 col-md-10 col-sm-12">
//         <div className="card border-0 shadow">
//           <div className="card-header bg-primary text-white">
//             <h2 className="mb-0 text-center">User Signup</h2>
//           </div>
//           <div className="card-body">
//             <form>
//               <div className="row">
//                 <div className="col-lg-6">
//                   <div className="form-group">
//                     <label className="font-weight-bold">User Name <span className="errmsg">*</span></label>
//                     <input type="text" className="form-control" placeholder="Enter User Name" />
//                   </div>
//                 </div>
//                 <div className="col-lg-6">
//                   <div className="form-group">
//                     <label className="font-weight-bold">Password <span className="errmsg">*</span></label>
//                     <input type="password" className="form-control" placeholder="Enter Password" />
//                   </div>
//                 </div>
//                 <div className="col-lg-6">
//                   <div className="form-group">
//                     <label className="font-weight-bold">Full Name <span className="errmsg">*</span></label>
//                     <input type="text" className="form-control" placeholder="Enter Full Name" />
//                   </div>
//                 </div>
//                 <div className="col-lg-6">
//                 <div className="form-group">
//                   <label className="font-weight-bold">Email <span className="errmsg">*</span></label>
//                   <input type="email" className="form-control" placeholder="Enter Email" />
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="form-group">
//                   <label className="font-weight-bold">Phone <span className="errmsg">*</span></label>
//                   <input type="number" className="form-control" placeholder="Enter Phone Number" />
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="form-group">
//                   <label className="font-weight-bold">State <span className="errmsg">*</span></label>
//                   <select className="form-control">
//                     <option value="uttrakhand">Uttrakhand</option>
//                     <option value="up">U.P</option>
//                     <option value="haryana">Haryana</option>
//                     <option value="punjab">Punjab</option>
//                     <option value="rajasthan">Rajasthan</option>
//                   </select>
//                 </div>
//               </div>
//            <div className="col-lg-12">
//                 <div className="form-group">
//                   <label className="font-weight-bold">Address <span className="errmsg">*</span></label>
//                   <textarea className="form-control"></textarea>
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="form-group">
//                   <label className="font-weight-bold">Gender</label>
//                   <br></br>
//                   <input type="radio" name="gender" value="male" className="app-check"></input>
//                   <label>Male</label>
//                   <input type="radio" name="gender" value="female" className="app-check"></input>
//                   <label>Female</label>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//           <div className="card-footer bg-white border-0">
//           <button type="submit" className="btn btn-primary btn-lg w-100 mb-2">Signup</button>
//           <Link to={'/login'} className="btn btn-danger btn-lg w-100">Close</Link>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//     )
// }
