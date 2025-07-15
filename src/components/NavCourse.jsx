import React from 'react';
import { Link } from 'react-router-dom';

const NavCourse = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light border-bottom shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">COURSES</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavCourse"
          aria-controls="navbarNavCourse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavCourse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>Add Course</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/search"}>Search Course</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/delete"}>Delete Course</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/view"}>View All Courses</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavCourse;
