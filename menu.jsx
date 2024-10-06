import React from 'react';

const Menu = () => {
  return (
    <section id="menu" className="menu section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Menu</h2>
        <p>Check our delicious menu</p>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="menu-item">
              <img src="assets/img/menu-1.jpg" className="menu-img" alt="" />
              <h4>Spaghetti Carbonara</h4>
              <p className="ingredients">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="price">$12</p>
              <p><a href="#" className="buy-btn">Buy Now</a></p>
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="menu-item">
              <img src="assets/img/menu-2.jpg" className="menu-img" alt="" />
              <h4>Margherita Pizza</h4>
              <p className="ingredients">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="price">$10</p>
              <p><a href="#" className="buy-btn">Buy Now</a></p>
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="menu-item">
              <img src="assets/img/menu-3.jpg" className="menu-img" alt="" />
              <h4>Caesar Salad</h4>
              <p className="ingredients">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="price">$8</p>
              <p><a href="#" className="buy-btn">Buy Now</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
