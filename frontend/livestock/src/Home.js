import React from 'react';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        {/* Sidebar */}
        <div className="col-3 bg-primary">
          <ul className="nav flex-column">
            <li className="nav-item mt-4 mb-4 text-white">Active</li>
            <li className="nav-item mt-4 mb-4 text-white">Link</li>
            <li className="nav-item mt-4 mb-4 text-white">Link</li>
            <li className="nav-item mt-4 mb-4 text-white">Disabled</li>
          </ul>
        </div>
        {/* Main Content */}
        <div className="col-9">
          <h1>Welcome to the Home Page</h1>
          <p>This is the main content area.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
