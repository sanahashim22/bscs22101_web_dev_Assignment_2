import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-area section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget">
              <h6>About Us</h6>
              <p>We are here to listen from you deliver excellence.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget">
              <h6>Social Links</h6>
              <p>Follow us</p>
              <div className="footer-social">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-dribbble"></i></a>
                <a href="#"><i className="fa fa-behance"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget">
              <h6>Contact Us</h6>
              <p>Address: 123 Coffee Street, Coffee City</p>
              <p>Phone: (012) 6985 236 7512</p>
              <p>Email: info@coffee.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
