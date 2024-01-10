import React from 'react'
import { Col, Row } from 'react-bootstrap'
import swiggyimage from '../images/swiggy.png'
import swiggy1 from '../images/new1.png'
import swiggy2 from '../images/new2.png'
import swiggy3 from '../images/new3.png'
import up from '../images/mobup1png.png'
import down from '../images/mobdown1.png'

function Header() {
  return (
    <>
    <div className=' '>
        <Row class>
            <Col md={6} className=' mt-5'>
                {/* swiggy title */}
                <div className='ms-5 d-flex justify-content-between me-5' >
<img src={swiggyimage} alt=""  width={'200px'}/>
<div>
<a href="" style={{color:'black',textDecoration:'none'}} ><b>Login</b></a>
<button className='bg-dark ms-3 text-light fw-bolder p-2'>Sign Up</button>
</div>
                </div>
              <div className='ms-5'>
              <div className='mt-5 mb-5'>
                    <h2>Hungry?</h2>
                    <h4 className='fw-light'><span>Order food from Your Favourite restraunt near you</span></h4>
                </div>
                <div className='d-flex  mb-3'>
                    <input type="text"  placeholder='Enter your delivery location' className='w-75 fw-bolder ' style={{height:'60px'}}/>
                    <i class="fa-solid fa-location-crosshairs mt-3 me-2"  style={{marginLeft:'-100px'}}>
                    </i>
                    <h6 className='mt-3 '>locate me</h6>
                    <button type='btn' className='p-2 fw-bolder' style={{color:'white', border:'none' ,backgroundColor:'darkorange'}}>FIND FOOD</button>
                </div>
                <div className='mt-5'>
                    <p>POPULAR CITIES IN INDIA <br /> <br />
                  <p className='fw-bold'>  Ahmedabad <span>Bangalore</span> Chennai  <span>Delhi</span>  Gurgaon   <span>Hyderabad</span> Kolkata <span>Mumbai</span> <br /> Pune& <span>more.</span></p></p>
                </div>
              </div>

            </Col >
            <Col  md={6}>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" alt="no image" width={'100%'} height={'550px'} />
            </Col>
        </Row>

      

        <div className='main d-flex align-items-center justify-content-between text-center text-light ' style={{backgroundColor:'#2b1e16'}}>
          <div className='first   ms-5  '>
          <img  className='mb-5' src={swiggy1} alt=""  width={'105px'} height={'200px'}/>
         <h4 >No Minimum Order</h4>
         <p > Order in for yourself or for the group, <br></br> with no restrictions on order value
</p>
          </div>
          <div className='second'>
          <img className='mb-5' src={swiggy2} alt=""  width={'105px'} height={'200px'}/>
         <h4>Live Order Tracking</h4>
         <p  > Know where your order is at all times, <br /> from the restaurant to your doorstep
</p>
          </div>
          <div className='third text-center me-5'>
          <img className='mb-5' src={swiggy3} alt=""  width={'105px'} height={'200px'}/>
         <h4 >Lightning-Fast Delivery</h4>
         <p > Experience Swiggy's superfast delivery <br /> for food delivered fresh & on time </p>
          </div>


        </div>

        <div className='d-flex '>
          <div className='d-flex flex-column ' style={{marginLeft:'100px',marginTop:'50px'}}>
            <h1 className='  mt-5 fw-bolder mb-2' >Restaurants in <br /> your pocket</h1>
            <h4 className=' mt-2  mb-5' > <span>Order from your favorite restaurants & track  on the go, with the all-new Swiggy app.</span></h4>
             <div>
             <a href="https://play.google.com/store/apps/details?id=in.swiggy.android"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" alt="playstore" width={'150px'} /></a>
             <a href="https://itunes.apple.com/in/app/swiggy-food-order-delivery/id989540920"> <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" alt="applestore"  width={'150px'}  /></a>

            </div>
          </div>
          <div>
            <img src={down} alt="" width={'70%'}   style={{marginLeft:'140px' }}/>

          </div>
          <div>
            <img  style={{marginTop:'80px'}}    src={up} alt=""  width={'100%'}/>

          </div>
        
        </div>
    </div>
    </>
  )
}

export default Header