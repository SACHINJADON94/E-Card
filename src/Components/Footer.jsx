import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase text-warning">About Us</h5>
            <p className="small">
              E-Card Clothing offers a curated collection of the latest fashion trends for every occasion. From casual wear to formal attire, we bring style to your wardrobe.
            </p>
          </div>

          {/* Categories Section */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase text-warning">Categories</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Men's Clothing</a></li>
              <li><a href="#" className="text-light text-decoration-none">Women's Clothing</a></li>
              <li><a href="#" className="text-light text-decoration-none">Kids' Clothing</a></li>
              <li><a href="#" className="text-light text-decoration-none">Accessories</a></li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase text-warning">Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Returns & Exchanges</a></li>
              <li><a href="#" className="text-light text-decoration-none">Shipping Information</a></li>
              <li><a href="#" className="text-light text-decoration-none">FAQs</a></li>
            </ul>
          </div>

          {/* Connect With Us Section */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase text-warning">Connect With Us</h5>
            <p className="small">Follow us on social media for the latest updates and offers:</p>
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=100071059430637" className="text-decoration-none">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="https://www.instagram.com/sachin_jadon9410/" className="text-decoration-none">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://www.linkedin.com/in/sachin-jadon?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-decoration-none">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://x.com/SachinJado10683?t=b6p2vI1VHVgtK_uu8YE2LA&s=08" className="text-decoration-none">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://github.com/SACHINJADON94" className="text-decoration-none">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="row border-top pt-3 mt-4">
          <div className="col-md-6">
            <p className="small mb-0">&copy; {new Date().getFullYear()} S-Mart Clothing. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="text-light text-decoration-none small me-3">Privacy Policy</a>
            <a href="#" className="text-light text-decoration-none small">Terms of Service</a>
            <a href="javascript:void(0);"></a>
          </div>
          <div className=" border-top pt-2 mt-3"></div>
        </div>
      </div>
    </footer>
  );
}

