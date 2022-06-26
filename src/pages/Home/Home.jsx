import React from 'react'
import "./style.css"
import {Row, Col} from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const navigateAppointment = () => {
    navigate('/appointment');
  }
  const navigateCommunity = () => {
    navigate('/community');
  }
  return (
  
     <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <div id="showcase">
            <div className="homecontainer">
              <div className="showcase-content">
                <div className="content inline-block">
                  <p>OUR PROGRAM PROVIDES</p>
                </div>
                <div className="content-1">
                  <h2>MENTAL HEALTH </h2>
                  <ul>
                    <li className="inner">Risus nec luctus mauris orci auctor purus euismod pretium purus pretium ligula rutrum tempor sapien and luctus</li>
                    <li className="inner">Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus feugiat dolor impedit</li>
                  </ul>
                  <br/>
                  <div className="btn inline-block btn-1" onClick={navigateAppointment}>
                    <p>Book Appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <main>
            <section id="our-beginning">
              <div className="section-wrap">
                <div className="homecontainer">
                  <div className="image">
                    <img src="https://st2.depositphotos.com/3591429/11212/i/950/depositphotos_112120698-stock-photo-ethnic-various-people.jpg" alt="" width="530px" height="594px" />
                  </div>
                  <div className="right-content">
                    <h3 className="heading-subtitle mb-1">WELCOME TO OUR COMMUNITY</h3>
                    <h2 className="heading-title mb-2">Everyone in one place</h2>
                    <h2 className="mb-1 mb-1">Here's how we got started…</h2>
                    <p className="justify mb-1 line-h ">Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus, eu mollislorem primis in orci integer metus mollis faucibus. An enim nullam tempor sapien gravida donec pretium and ipsum porta justo integer at velna vitae auctor integer congue.</p>
                    <div className="btn inline-block btn-1" onClick={navigateCommunity}>
                      <p>Join Community</p>
                  </div>
                  </div>
                </div>
              </div>
            </section>
         
            <section id="departments">
              <div className="section-wrap-1">
                <div className="homecontainer-2">
                  <h2 className="text-center m-heading">Our Podcasts</h2>
                  <br/>
                  <Row>
                    <Col><ReactPlayer width={300} height={250} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /></Col>
                    <Col><ReactPlayer width={300} height={250} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /></Col>
                    <Col><ReactPlayer width={300} height={250} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /></Col>
                  </Row>
                </div>
              </div>
            </section>
          
            <section id="counter">
              <div className="section-wrap-2">
                <div className="homecontainer-2">
                  <div className="row">
                    <div className="column">
                      <div className="counter-block text-center">
          
                        <h2 className="counter-number">9,632</h2>
                        <h4 className="counter-text">Happy Patients</h4>
                      </div>
                    </div>
                    <div className="column">
                      <div className="counter-block text-center">
                       
                        <h2 className="counter-number">178</h2>
                        <h4 className="counter-text">Qualified Doctors</h4>
                      </div>
                    </div>
                    <div className="column">
                      <div className="counter-block text-center">
                      
                        <h2 className="counter-number">864</h2>
                        <h4 className="counter-text">Clinic Rooms</h4>
                      </div>
                    </div>
                    <div className="column">
                      <div className="counter-block text-center">
                      
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
                <div className="homecontainer-2">
                  <h2 className="text-center m-heading py-1">What Our Clients Say</h2>
                  <p className="text-center content-p">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</p>
                  <div className="testimonial-cards">
                    <div className="cards text-center">
                      <img src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/wided-sghaier.jpg.img.490.medium.jpg/1594912196352.jpg" alt="" width="70px" height="70px" />
                      <p className="testimonoal-content">“An augue cubilia laoreet undo magna at risus suscipit egestas magna an ipsum ligula vitae and purus ipsum primis”</p>
                      <h3 className="name">DAN HODGES</h3>
                      <h5 className="designation">PATIENT - X</h5>
                    </div>
                    <div className="cards text-center">
                      <img src="https://www.mckinsey.com/~/media/mckinsey/careers%20redesign/meet%20our%20people/profiles/alex/alex-sierra_profile_1536x1152.jpg?mw=400&car=2:2" alt="" width="70px" height="70px" />
                      <p className="testimonoal-content">“An augue cubilia laoreet undo magna at risus suscipit egestas magna an ipsum ligula vitae and purus ipsum primis”</p>
                      <h3 className="name">DAN HODGES</h3>
                      <h5 className="designation">PATIENT - X</h5>
                    </div>
                    <div className="cards text-center">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNJl90PHXfFAKhnxyqN947HBh-n3Jq7AkmA&usqp=CAU" alt="" width="70px" height="70px" />
                      <p className="testimonoal-content">“An augue cubilia laoreet undo magna at risus suscipit egestas magna an ipsum ligula vitae and purus ipsum primis”</p>
                      <h3 className="name">DAN HODGES</h3>
                      <h5 className="designation">PATIENT - X</h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
          </main>
        </div>
   
  )
}


