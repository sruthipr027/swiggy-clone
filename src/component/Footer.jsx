import React from 'react'
import { Col, Row } from 'react-bootstrap'
import logo from '../images/logo1.png'

function Footer() {
  return (
    <>
    <Row className=' text-light  ' style={{backgroundColor:'black'}}>
        
        <Col  md={2} className='mt-5 d-flex flex-column ms-5' >
            <h6 className='fw-bolder  mb-3' ><span>Company name</span></h6>
            <a href="" >About Us</a>
            <a href="">Team</a>
            <a href="" >Careers</a>
            <a href="" >Swiggy </a>
            <a href="" >Bug Bounty</a>
            <a href="" >Swiggy One</a>
            <a href="" >Swiggy Corporate</a>
            <a href="">Swiggy Instamart</a>




        </Col>
        <Col md={3} className='mt-5  d-flex flex-column'>
            <h6 className='fw-bolder  mb-3' ><span> Contact</span></h6>
            <a href="">Help & Support</a>
            <a href="" >Partner with us</a>
            <a href="">Ride with us</a>
        </Col> 
        <Col md={3} className='mt-5 d-flex flex-column'>
            <h6 className='fw-bolder mb-3' ><span> Legal</span></h6>
            <a href="" >Terms & Conditions</a>
            <a href="">Refund & Cancellation</a>
            <a href="">Privacy Policy</a>
            <a href="">Cookie Policy</a>
            <a href="" >Offer Terms</a>
            <a href="" >Phishing & Fraud</a>


        </Col>
        <Col md={3} className='mt-5  d-flex flex-column'>
        <a href="https://itunes.apple.com/in/app/swiggy-food-order-delivery/id989540920"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" alt="applestore"  width={'200px'} className='mb-3 border border-white ' style={{borderRadius:'10px'}}  /></a>
        <a href="https://play.google.com/store/apps/details?id=in.swiggy.android"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" alt="playstore" width={'200px'}  className='mb-3 border border-white ' style={{borderRadius:'10px'}}/></a>


        </Col>
     
        <Row>
           <div className='ms-5 mx-5  pe-5' > 
           <hr />
           <Col>
            <h6 className='fw-bolder mt-4 mb-5'><span>EXPLORE EVERY RESTAURANTS NEAR ME</span></h6>
            <div className='d-flex align-items-center justify-content-between me-5'>
            <a href=""  className='mb-3'>Explore Restaurants Near Me</a>
            <a href=""  className='mb-3'>Explore Restaurants Near Me</a>
            </div>
            <hr />

            </Col>
           </div>
            <Col>
            <div className='ms-5 d-flex align-items-between justify-content-between mb-5 mt-3'>
                <img src={logo} alt="" style={{color:'white'}} width={'150px'} />
                <h6>© 2023 Swiggy</h6>
                <div className='ms-3'> 
                <i class="fa-brands fa-facebook-f fa-2x"></i>
                <i class="fa-brands fa-pinterest fa-2x ms-4"></i>
                <i class="fa-brands fa-instagram  fa-2x ms-4"></i>
                <i class="fa-brands fa-twitter fa-2x ms-4" ></i>

                </div>

            </div>


            </Col>
        </Row>
    </Row>
    
    </>
  )
}

export default Footer