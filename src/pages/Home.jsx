import React from 'react'
import "./Css/style.css"

export default function Home() {
  return (
  
     <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <div id="showcase">
            <div className="container">
              <div className="showcase-content">
                <div className="content inline-block">
                  <p>OUR CLINIC PROVIDES</p>
                </div>
                <div className="content-1">
                  <h3>BEST QUALITY</h3>
                  <h2>MEDICAL TREATMENT FOR YOU AND YOUR FAMILY.</h2>
                  <ul>
                    <li className="inner">Risus nec luctus mauris orci auctor purus euismod pretium purus pretium ligula rutrum tempor sapien and luctus</li>
                    <li className="inner">Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus feugiat dolor impedit</li>
                  </ul>
                  <div className="btn inline-block btn-1">
                    <p>Discover More</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <main>
            <section id="our-beginning">
              <div className="section-wrap">
                <div className="container">
                  <div className="image">
                    <img src="" alt="" width="530px" height="594px" />
                  </div>
                  <div className="right-content">
                    <h3 className="heading-subtitle mb-1">WELCOME TO MEDSERVICE</h3>
                    <h2 className="heading-title mb-2">Complete Medical solutions in one place</h2>
                    <h2 className="mb-1 mb-1">Here's how we got started…</h2>
                    <p className="justify mb-1 line-h ">Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus, eu mollislorem primis in orci integer metus mollis faucibus. An enim nullam tempor sapien gravida donec pretium and ipsum porta justo integer at velna vitae auctor integer congue.</p>
                    <div className="sign">
                      <p className="mb-1">Dr.Randon Pexon, Head of Clinic</p>
                      <img src="" alt="" width="200px" height="33px" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
         
            <section id="departments">
              <div className="section-wrap-1">
                <div className="container-2">
                  <h2 className="text-center m-heading">Our Departments</h2>
                  <p className="text-center">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</p>
                  <div className="services-box inline-block text-center py-3">
                    <div className="box ">
                      <img src="" className="service-icon" alt="" width="80px" height="80px" />
                      <h5 className="services-title">Pediatrics</h5>
                    </div>
                    <div className="box ">
                      <img src="" className="service-icon" alt="" width="80px" height="80px" />
                      <h5 className="services-title">Cardiology</h5>
                    </div>
                    <div className="box ">
                      <img src="" className="service-icon" alt="" width="80px" height="80px" />
                      <h5 className="services-title">MRI</h5>
                    </div>
                    <div className="box ">
                      <img src="" className="service-icon" alt="" width="80px" height="80px" />
                      <h5 className="services-title">Neurology</h5>
                    </div>
                  </div>
                  <div className="services-box inline-block text-center">
                    <div className="box ">
                      <img src="" className="service-icon" alt="" width="80px" height="80px" />
                      <h5 className="services-title">Haematology</h5>
                    </div>
                    <div className="box ">
                      <img src="" className="service-icon" alt="" width="80px" height="80px" />
                      <h5 className="services-title">Pulmonologist</h5>
                    </div>
                    <div className="box ">
                      <img src="" className="service-icon" alt="" width="80px" height="80px" />
                      <h5 className="services-title">Emergency Help</h5>
                    </div>
                    <div className="box ">
                      <img src="" className="service-icon" alt="" width="80px" height="80px" />
                      <h5 className="services-title">Laboratory Services</h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          
            <section id="counter">
              <div className="section-wrap-2">
                <div className="container-2">
                  <div className="row">
                    <div className="column">
                      <div className="counter-block text-center">
                        <img src="" alt="" width="80px" height="80px" />
                        <h2 className="counter-number">9,632</h2>
                        <h4 className="counter-text">Happy Patients</h4>
                      </div>
                    </div>
                    <div className="column">
                      <div className="counter-block text-center">
                        <img src="" alt="" width="80px" height="80px" />
                        <h2 className="counter-number">178</h2>
                        <h4 className="counter-text">Qualified Doctors</h4>
                      </div>
                    </div>
                    <div className="column">
                      <div className="counter-block text-center">
                        <img src="" alt="" width="80px" height="80px" />
                        <h2 className="counter-number">864</h2>
                        <h4 className="counter-text">Clinic Rooms</h4>
                      </div>
                    </div>
                    <div className="column">
                      <div className="counter-block text-center">
                        <img src="" alt="" width="80px" height="80px" />
                        <h2 className="counter-number">864</h2>
                        <h4 className="counter-text">Local Partners</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          
            <section id="testimonial">
              <div className="section-wrap-2">
                <div className="container-2">
                  <h2 className="text-center m-heading py-1">What Our Patients Say</h2>
                  <p className="text-center content-p">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</p>
                  <div className="testimonial-cards">
                    <div className="cards text-center">
                      <img src="" alt="" width="70px" height="70px" />
                      <p className="testimonoal-content">“An augue cubilia laoreet undo magna at risus suscipit egestas magna an ipsum ligula vitae and purus ipsum primis”</p>
                      <h3 className="name">DAN HODGES</h3>
                      <h5 className="designation">PATIENT - X</h5>
                    </div>
                    <div className="cards text-center">
                      <img src="" alt="" width="70px" height="70px" />
                      <p className="testimonoal-content">“An augue cubilia laoreet undo magna at risus suscipit egestas magna an ipsum ligula vitae and purus ipsum primis”</p>
                      <h3 className="name">DAN HODGES</h3>
                      <h5 className="designation">PATIENT - X</h5>
                    </div>
                    <div className="cards text-center">
                      <img src="" alt="" width="70px" height="70px" />
                      <p className="testimonoal-content">“An augue cubilia laoreet undo magna at risus suscipit egestas magna an ipsum ligula vitae and purus ipsum primis”</p>
                      <h3 className="name">DAN HODGES</h3>
                      <h5 className="designation">PATIENT - X</h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>
         
            <footer className="footer">
              <p className="text-center">Copyright © 2020 MedService. All Rights Reserved.</p>
            </footer>
          </main>
        </div>
   
  )
}


