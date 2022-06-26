import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>SADAY
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta vel voluptate deleniti dolores at. Iusto quisquam omnis, quo animi molestiae ut optio minus ex. Soluta aliquam delectus fugit deleniti saepe!
              </p>
            </div>


            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/home' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='/appointment' className='text-reset'>
                  Appointment
                </a>
              </p>
              <p>
                <a href='/products' className='text-reset'>
                  Products
                </a>
              </p>
              <p>
                <a href='/podcasts' className='text-reset'>
                  Podcasts
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                +91 929-242-6868
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Saday.com
        </a>
      </div>
    </MDBFooter>
  );
}