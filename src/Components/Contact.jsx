import React from 'react';

export default function Contact() {
  return (
    <>
      <div className="container mt-5 p-5 shadow rounded">
      <div class="row">
            <div class="contact_info">
              <div class="info_item">
                <h5>Noida U.P India</h5>
                <p>A Block, Sector 16, Noida, Uttar Pradesh 201301</p>
              </div>
              <div class="info_item">
                <h5>+91-9410602698</h5>
                <p>Mon to Fri 9am to 6 pm</p>
              </div>
              <div class="info_item">
                <h5>sachinjadon82@gmail.com</h5>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
      <h1 className="text-center bg-warning hover shadow">Contact Us</h1>
        <div className="row">
          <div className="col-6">
            <div style={{ width: "100%" }}>
              <iframe
                width="100%"
                height="400"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=A%20-%2043%20,%20%20sector%2016%20noida&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <title>Google Map Location
                <a href="https://www.gps.ie/">gps systems</a></title>
              </iframe>
            </div>
          </div>
          <div className="col-6">
            <div className="card p-4 shadow hover-info">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </>
    );
  }
  
