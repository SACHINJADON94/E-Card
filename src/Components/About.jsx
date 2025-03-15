import React from 'react';

export default function About() {
  return (
    <div className="container-fluid shadow rounded bg-light p-5">
      <h1 className="text-center bg-success text-white p-3 rounded-pill mb-5">About Us</h1>

      <div className="row">
        <div className="col-12">
          {/* About Section */}
          <div className="card shadow mb-4">
            <div className="card-body">
              <p className="text-justify fs-5 mt-4">
                Started in 2007, S-Mart has enabled millions of consumers, sellers, merchants, and small businesses to be a part of India's digital commerce revolution, with a registered customer base of more than 400 million, offering over 150 million products across 80+ categories.
              </p>
              <p className="text-justify fs-5 mt-4">
                Our efforts to democratize commerce in India, drive access and affordability, delight customers, create lakhs of jobs in the ecosystem, and empower generations of entrepreneurs and MSMEs have inspired us to innovate on many industry firsts.
              </p>
              
              {/* Mission Section */}
              <h2 className="text-center text-success mb-4">Our Mission</h2>
              <p className="text-justify fs-5 mt-4">
                S-Mart is known for pioneering services such as Cash on Delivery, No Cost EMI, and easy returns – customer-centric innovations that have made online shopping more accessible and affordable for millions of Indians.
              </p>

              {/* Programmes Section */}
              <h2 className="text-center text-success mb-4">Our Programmes</h2>
              <p className="text-justify fs-5 mt-4">
                With Catapult, S-Mart aims to provide an umbrella solution to a budding brand's financing & marketing needs. The program offers marketing solutions and capital for new-age direct-to-consumer brands to leapfrog into their next phase of growth.
              </p>

              {/* Group Companies Section */}
              <h2 className="text-center text-success mb-4">Our Group Companies</h2>
              <p className="text-justify fs-5 mt-4">
                The S-Mart Group is one of India's leading digital commerce entities and includes group companies S-Mart, Myntra, S-Mart Wholesale, S-Mart Health+, and Cleartrip.
              </p>

              {/* Contact Section */}
              <h2 className="text-center text-success mb-4">Get in Touch</h2>
              <p className="text-justify fs-5 mt-4">
                For more information on the S-Mart Ads, kindly write to us at <a href="mailto:catapult@S-Mart.com" className="text-decoration-none">catapult@S-Mart.com</a>.
              </p>
              <p className="text-justify fs-5 mt-4">
                To know more about the ad experiences being offered by S-Mart, visit <a href="https://www.S-Mart.com" className="text-decoration-none">S-Mart.com</a>.
              </p>
            </div>
          </div>

          {/* Welcome Section */}
          <div className="card shadow mb-4">
            <div className="card-body">
              <h2 className="text-center text-success mb-4">Welcome to S-Mart</h2>
              <p className="text-justify fs-5 mt-4">
                S-Mart is your ultimate online shopping platform, offering a vast array of products to cater to all your needs. We strive to provide you with an unparalleled shopping experience.
              </p>

              {/* Story Section */}
              <h2 className="text-center text-success mb-4">Our Story</h2>
              <p className="text-justify fs-5 mt-4">
                S-Mart's journey began with a vision to create India's finest online shopping platform. Today, we take pride in turning our vision into reality.
              </p>

              {/* Mission Section */}
              <h2 className="text-center text-success mb-4">Our Mission</h2>
              <p className="text-justify fs-5 mt-4">
                At S-Mart, our mission is to deliver the best shopping experience to our customers. We aim to offer a wide range of products at competitive prices, ensuring top-notch quality and customer satisfaction.
              </p>

              {/* Values Section */}
              <h2 className="text-center text-success mb-4">Our Values</h2>
              <p className="text-justify fs-5 mt-4">
                Customer satisfaction is paramount at S-Mart. We prioritize providing an exceptional shopping experience, ensuring that our customers are delighted with our services.
              </p>

              {/* Product Offerings */}
              <h2 className="text-center text-success mb-4">What We Offer</h2>
              <p className="text-justify fs-5 mt-4">Explore our extensive range of products, including:</p>
              <ul className="fs-5">
                <li>Electronics</li>
                <li>Fashion</li>
                <li>Home Decor</li>
                <li>Health & Beauty</li>
                <li>And much more!</li>
              </ul>

              {/* Shopping Instructions */}
              <h2 className="text-center text-success mb-4">How to Shop with Us</h2>
              <p className="text-justify fs-5 mt-4">
                Shopping on S-Mart is effortless. Simply browse through our categories, select your desired products, and complete your purchase with our secure checkout process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
