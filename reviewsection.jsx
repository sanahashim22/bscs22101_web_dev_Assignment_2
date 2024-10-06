import React from 'react';

const ReviewSection = () => {
  return (
    <section className="review-area section-gap" id="review">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-10">
            <div className="title text-center">
              <h1 className="mb-10">Client Reviews</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="single-review">
              <img src="img/r1.jpg" alt="" />
              <p>“Coffee is the best. Love the way it’s made here.”</p>
              <h4>Mark Twain</h4>
              <p>Customer</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-review">
              <img src="img/r2.jpg" alt="" />
              <p>“Perfectly brewed coffee that fuels my day.”</p>
              <h4>Jane Doe</h4>
              <p>Customer</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-review">
              <img src="img/r3.jpg" alt="" />
              <p>“A great atmosphere with amazing coffee.”</p>
              <h4>Albert Einstein</h4>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </div>	
    </section>
  );
};

export default ReviewSection;
