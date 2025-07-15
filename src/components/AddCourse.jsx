import React from 'react'
import NavCourse from './NavCourse'


const AddCourse = () => {
  return (
    <div>
        <NavCourse/>
        <br />
        <h1 className='text-center'>ADD COURSE</h1>
        <br />
      <div className="container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col-6">
                        <label className="form-label">Course Name:</label>
                        <input type="text" className='form-control'/>
                    </div>
                    <div className=" col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">Instructor:</label>
                        <input type="text" className='form-control'/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">Duration (in weeks):</label>
                        <input type="text" className='form-control'/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">Fee:</label>
                        <input type="text" className='form-control'/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">Mode:</label>
                        <select className='form-control'>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                        </select>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">Start Date:</label>
                        <input type="date" className='form-control'/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label className="form-label">Upload Image:</label>
                        <input type="file" className='form-control'/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddCourse
