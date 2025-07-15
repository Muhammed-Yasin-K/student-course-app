import React from 'react'
import NavCourse from './NavCourse'


const SearchCourse = () => {
  return (
    <div>
      <NavCourse/>
        <br />
        <h1 className='text-center'>SEARCH COURSE</h1>
        <br />
      <div className="container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label className='form-label'>Enter Course Name:</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="btn btn-primary">Search</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SearchCourse
