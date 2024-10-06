import React from 'react';

const Sidebar = () => {
  return (
    <nav id="sidebar" className="sidebar js-sidebar">
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand" href="/">
          <span className="align-middle">AdminKit</span>
        </a>

        <ul className="sidebar-nav">
          <li className="sidebar-header">Pages</li>

          <li className="sidebar-item active">
            <a className="sidebar-link" href="/dashboard">
              <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Dashboard</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="/profile">
              <i className="align-middle" data-feather="user"></i> <span className="align-middle">Profile</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="/sign-in">
              <i className="align-middle" data-feather="log-in"></i> <span className="align-middle">Sign In</span>
            </a>
          </li>

          <li className="sidebar-item">
            <a className="sidebar-link" href="/sign-up">
              <i className="align-middle" data-feather="user-plus"></i> <span className="align-middle">Sign Up</span>
            </a>
          </li>

          <li className="sidebar-header">Tools & Components</li>
          
          <li className="sidebar-item">
            <a className="sidebar-link" href="/buttons">
              <i className="align-middle" data-feather="square"></i> <span className="align-middle">Buttons</span>
            </a>
          </li>
        </ul>

        <div className="sidebar-cta">
          <div className="sidebar-cta-content">
            <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
            <div className="mb-3 text-sm">Are you looking for more components? Check out our premium version.</div>
            <div className="d-grid">
              <a href="/upgrade-to-pro" className="btn btn-primary">Upgrade to Pro</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
