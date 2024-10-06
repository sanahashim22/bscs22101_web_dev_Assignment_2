import React from 'react';

const DashboardFooter = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row text-muted">
          <div className="col-6 text-start">
            <p className="mb-0">
              <a className="text-muted" href="https://adminkit.io/" target="_blank" rel="noopener noreferrer"><strong>AdminKit</strong></a> - <a className="text-muted" href="https://adminkit.io/" target="_blank" rel="noopener noreferrer"><strong>Bootstrap Admin Template</strong></a>&copy;
            </p>
          </div>
          <div className="col-6 text-end">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a className="text-muted" href="#settings" target="_blank" rel="noopener noreferrer">Settings</a>
              </li>
              <li className="list-inline-item">
                <a className="text-muted" href="#help" target="_blank" rel="noopener noreferrer">Help</a>
              </li>
              <li className="list-inline-item">
                <a className="text-muted" href="#contact" target="_blank" rel="noopener noreferrer">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;