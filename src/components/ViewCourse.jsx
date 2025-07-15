import React from 'react';
import NavCourse from './NavCourse';

const ViewCourse = () => {
  return (
    <div>
        <NavCourse/>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h2 className="text-center mb-4">VIEW COURSES</h2>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Instructor</th>
                    <th>Duration</th>
                    <th>Fee</th>
                    <th>Mode</th>
                    <th>Start Date</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>React Basics</td>
                    <td>Rahul</td>
                    <td>4 Weeks</td>
                    <td>₹2999</td>
                    <td>Online</td>
                    <td>2025-08-01</td>
                    <td><img src="https://via.placeholder.com/60" alt="React" width="60" height="60"/></td>
                  </tr>
                  <tr>
                    <td>Python for Data Science</td>
                    <td>Manu</td>
                    <td>6 Weeks</td>
                    <td>₹4999</td>
                    <td>Offline</td>
                    <td>2025-07-20</td>
                    <td><img src="https://via.placeholder.com/60" alt="Python" width="60" height="60"/></td>
                  </tr>
                  <tr>
                    <td>Web Development</td>
                    <td>David</td>
                    <td>8 Weeks</td>
                    <td>₹3999</td>
                    <td>Online</td>
                    <td>2025-09-10</td>
                    <td><img src="https://via.placeholder.com/60" alt="Web Dev" width="60" height="60"/></td>
                  </tr>
                  <tr>
                    <td>Java Programming</td>
                    <td>Priya</td>
                    <td>5 Weeks</td>
                    <td>₹3499</td>
                    <td>Offline</td>
                    <td>2025-08-15</td>
                    <td><img src="https://via.placeholder.com/60" alt="Java" width="60" height="60"/></td>
                  </tr>
                  <tr>
                    <td>Android App Dev</td>
                    <td>Ravi</td>
                    <td>7 Weeks</td>
                    <td>₹4599</td>
                    <td>Online</td>
                    <td>2025-09-01</td>
                    <td><img src="https://via.placeholder.com/60" alt="Android" width="60" height="60"/></td>
                  </tr>
                  <tr>
                    <td>Cloud Computing</td>
                    <td>Sneha</td>
                    <td>6 Weeks</td>
                    <td>₹5599</td>
                    <td>Offline</td>
                    <td>2025-08-22</td>
                    <td><img src="https://via.placeholder.com/60" alt="Cloud" width="60" height="60"/></td>
                  </tr>
                  <tr>
                    <td>Machine Learning</td>
                    <td>Arun</td>
                    <td>8 Weeks</td>
                    <td>₹6999</td>
                    <td>Online</td>
                    <td>2025-09-05</td>
                    <td><img src="https://via.placeholder.com/60" alt="ML" width="60" height="60"/></td>
                  </tr>
                  <tr>
                    <td>Blockchain Basics</td>
                    <td>Kiran</td>
                    <td>4 Weeks</td>
                    <td>₹5999</td>
                    <td>Online</td>
                    <td>2025-08-18</td>
                    <td><img src="https://via.placeholder.com/60" alt="Blockchain" width="60" height="60"/></td>
                  </tr>
                  <tr>
                    <td>UI/UX Design</td>
                    <td>Neha</td>
                    <td>3 Weeks</td>
                    <td>₹2799</td>
                    <td>Offline</td>
                    <td>2025-07-30</td>
                    <td><img src="https://via.placeholder.com/60" alt="UI/UX" width="60" height="60"/></td>
                  </tr>
                  <tr>
                    <td>C++ Programming</td>
                    <td>Anil</td>
                    <td>5 Weeks</td>
                    <td>₹3999</td>
                    <td>Online</td>
                    <td>2025-08-10</td>
                    <td><img src="https://via.placeholder.com/60" alt="C++" width="60" height="60"/></td>
                  </tr>
                  <tr>
                    <td>Cybersecurity Essentials</td>
                    <td>Swathi</td>
                    <td>6 Weeks</td>
                    <td>₹4599</td>
                    <td>Offline</td>
                    <td>2025-09-12</td>
                    <td><img src="https://via.placeholder.com/60" alt="Cybersecurity" width="60" height="60"/></td>
                  </tr>
                  <tr>
                    <td>Data Structures</td>
                    <td>Ramesh</td>
                    <td>5 Weeks</td>
                    <td>₹3799</td>
                    <td>Online</td>
                    <td>2025-08-25</td>
                    <td><img src="https://via.placeholder.com/60" alt="DSA" width="60" height="60"/></td>
                  </tr>
                  <tr>
                    <td>PHP & MySQL</td>
                    <td>Fatima</td>
                    <td>6 Weeks</td>
                    <td>₹4299</td>
                    <td>Offline</td>
                    <td>2025-09-02</td>
                    <td><img src="https://via.placeholder.com/60" alt="PHP" width="60" height="60"/></td>
                  </tr>
                  <tr>
                    <td>DevOps Foundations</td>
                    <td>Abhishek</td>
                    <td>7 Weeks</td>
                    <td>₹5699</td>
                    <td>Online</td>
                    <td>2025-08-28</td>
                    <td><img src="https://via.placeholder.com/60" alt="DevOps" width="60" height="60"/></td>
                  </tr>
                  <tr>
                    <td>Networking Basics</td>
                    <td>Meera</td>
                    <td>4 Weeks</td>
                    <td>₹3499</td>
                    <td>Offline</td>
                    <td>2025-09-15</td>
                    <td><img src="https://via.placeholder.com/60" alt="Networking" width="60" height="60"/></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCourse;
