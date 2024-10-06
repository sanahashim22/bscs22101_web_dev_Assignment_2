import React from 'react';

const DashboardAnalytics = () => {
  return (
    <main className="content">
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3"><strong>Analytics</strong> Dashboard</h1>
        <div className="row">
          <div className="col-xl-6 col-xxl-5 d-flex">
            <div className="w-100">
              <div className="row">
                {['Sales', 'Visitors', 'Earnings', 'Orders'].map((title, index) => (
                  <div className="col-sm-6" key={index}>
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col mt-0">
                            <h5 className="card-title">{title}</h5>
                          </div>
                          <div className="col-auto">
                            <div className="stat text-primary">
                              <i className={`align-middle ${index % 2 === 0 ? 'mdi mdi-truck' : 'mdi mdi-users'}`}></i>
                            </div>
                          </div>
                        </div>
                        <h1 className="mt-1 mb-3">{index % 2 === 0 ? '2.382' : '14.212'}</h1>
                        <div className="mb-0">
                          <span className={`text-${index % 2 === 0 ? 'danger' : 'success'}`}>
                            <i className="mdi mdi-arrow-bottom-right"></i> {index % 2 === 0 ? '-3.65%' : '5.25%'}
                          </span>
                          <span className="text-muted"> Since last week</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-xxl-7">
            <div className="card flex-fill w-100">
              <div className="card-header">
                <h5 className="card-title mb-0">Recent Movement</h5>
              </div>
              <div className="card-body py-3">
                <div className="chart chart-sm">
                  <canvas id="chartjs-dashboard-line"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Additional rows can be added here if necessary */}
      </div>
    </main>
  );
};

export default DashboardAnalytics;