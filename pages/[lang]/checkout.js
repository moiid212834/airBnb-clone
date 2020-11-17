import {useRouter} from 'next/router'
import Layout from '../../components/layout'
import Maps from '../../components/maps'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faStar, faHeart, faTimes, faAngleRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import React, {useState, useEffect} from 'react'
import { Tabs, Button } from 'antd';
import { Card, Avatar } from 'antd';
import { Carousel } from 'antd';



const trips = ()=> {
  const router = useRouter();
  function callback(key) {
    console.log(key);
  }

  return (
    <Layout>
        <div className="navpadding bg-black"></div>
        <div className="h-100 w-100 bg-light">
            <div className="p-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bg-white rounded border mb-2">
                            <div className="w-100 text-center py-2">
                                <FontAwesomeIcon icon={faTimes} className="float-left ml-3"></FontAwesomeIcon>
                                <b>Booking for your Home</b>
                            </div>
                            <hr className="mt-0"/>
                            <div className="p-3">   
                                <small>Dates: 20/10/2020 to 25/10/2020</small>
                                <h2>Your booking has been <span className="text-success">accepted</span></h2>
                            </div>
                        </div>
                        <div className="bg-white rounded border mb-2">
                            <div className="p-3">   
                                <Carousel autoplay className="mb-3">
                                    <div className="w-100" className="rounded">
                                        <img src="https://pix10.agoda.net/hotelImages/1269933/-1/e426483a11b42f1773217818c8854c08.jpg" alt="" className="w-100"/>
                                    </div>
                                    <div className="w-100" className="rounded">
                                        <img src="https://a0.muscache.com/im/pictures/user/f95b6593-fa10-4516-9077-1f5e5127a1a4.jpg" alt="" className="w-100"/>
                                    </div>
                                    
                                </Carousel>
                                <h5>Lorem Ipsom dolor</h5>
                                <div className="p-3">

                                    <div className="d-flex justify-content-between mb-2 pb-2">
                                        <div><FontAwesomeIcon icon={faHeart} className="mr-3"></FontAwesomeIcon><b>Lorem Ipsum</b></div>
                                        <div><b><FontAwesomeIcon icon={faAngleRight} className="mr-3"></FontAwesomeIcon></b></div>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2 pb-2">
                                        <div><FontAwesomeIcon icon={faHeart} className="mr-3"></FontAwesomeIcon><b>Lorem Ipsum</b></div>
                                        <div><b><FontAwesomeIcon icon={faAngleRight} className="mr-3"></FontAwesomeIcon></b></div>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2 pb-2">
                                        <div><FontAwesomeIcon icon={faHeart} className="mr-3"></FontAwesomeIcon><b>Lorem Ipsum</b></div>
                                        <div><b><FontAwesomeIcon icon={faAngleRight} className="mr-3"></FontAwesomeIcon></b></div>
                                    </div>
                                    
                                </div>
                                <div className="d-flex justify-content-arround mb-4 ">
                                    <div className="p-3 w-50">
                                        <small><b>Checkin</b></small><br/>
                                        12/1/2020
                                    </div>
                                    <div className="border-left border-dark p-3 w-50">
                                        <small><b>Checkout</b></small><br/>
                                        13/1/2020
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start mb-4">
                                    <img src="https://a0.muscache.com/im/pictures/user/f95b6593-fa10-4516-9077-1f5e5127a1a4.jpg" className="mr-2" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}} alt=""/>
                                    <div>
                                        <h4>Hosted by Wai Suet Gi Gi</h4>
                                        <div>Joined on October 2020</div>
                                        <div><span><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon>&nbsp;</span>&nbsp;4.77 <span className="text-muted">(40 Reviews)</span>&nbsp;&nbsp;&nbsp;&nbsp;<span><FontAwesomeIcon icon={faHeart} className="text-theme"></FontAwesomeIcon></span>&nbsp;Profile Verified</div>
                                        <br/>
                                        <div>
                                            <h6>
                                            Entire Apartment
                                            </h6>
                                            <h6>
                                            5 Guests
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded border mb-2">
                            <div className="p-3">   
                                <div><b>Lorem ipsum dolor</b></div>
                                <div>Lorem ipsum dolor set amet</div>
                                <div><a href="">Lorem</a></div>
                            </div>
                            <div className="p-3">   
                                <div><b>Who's Coming?</b></div>
                                <div>5 Guests</div>
                            </div>
                            <div className="p-3"> 
                                <div>Confirmation Code</div>  
                                <h3><b>JHUSGDH</b></h3>
                                <br/><br/>
                                <div className="d-flex justify-content-between mb-2 pb-2">
                                    <div><FontAwesomeIcon icon={faHeart} className="mr-3"></FontAwesomeIcon><b>Lorem Ipsum</b></div>
                                    <div><b><FontAwesomeIcon icon={faAngleRight} className="mr-3"></FontAwesomeIcon></b></div>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between mb-2 pb-2">
                                    <div><FontAwesomeIcon icon={faHeart} className="mr-3"></FontAwesomeIcon><b>Lorem Ipsum</b></div>
                                    <div><b><FontAwesomeIcon icon={faAngleRight} className="mr-3"></FontAwesomeIcon></b></div>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between mb-2 pb-2">
                                    <div><FontAwesomeIcon icon={faHeart} className="mr-3"></FontAwesomeIcon><b>Lorem Ipsum</b></div>
                                    <div><b><FontAwesomeIcon icon={faAngleRight} className="mr-3"></FontAwesomeIcon></b></div>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between mb-2 pb-2">
                                    <div><FontAwesomeIcon icon={faHeart} className="mr-3"></FontAwesomeIcon><b>Lorem Ipsum</b></div>
                                    <div><b><FontAwesomeIcon icon={faAngleRight} className="mr-3"></FontAwesomeIcon></b></div>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between mb-2 pb-2">
                                    <div><FontAwesomeIcon icon={faHeart} className="mr-3"></FontAwesomeIcon><b>Lorem Ipsum</b></div>
                                    <div><b><FontAwesomeIcon icon={faAngleRight} className="mr-3"></FontAwesomeIcon></b></div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-6">
                    <div className="bg-white rounded border mb-2">
                            <div className="p-3">   
                                <h3>Getting There</h3>
                            </div>
                            <div className="p-3">   
                                <div><b>Who's Coming?</b></div>
                                <div>5 Guests</div>
                            </div>
                            <div className="p-3"> 
                                <h3><b>Adress</b></h3>
                                <div>Lorem Ipsum</div>  
                                <br/><br/>
                                <div className="d-flex justify-content-between mb-2 pb-2">
                                    <div><FontAwesomeIcon icon={faHeart} className="mr-3"></FontAwesomeIcon><b>Lorem Ipsum</b></div>
                                    <div><b><FontAwesomeIcon icon={faAngleRight} className="mr-3"></FontAwesomeIcon></b></div>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between mb-2 pb-2">
                                    <div><FontAwesomeIcon icon={faHeart} className="mr-3"></FontAwesomeIcon><b>Lorem Ipsum</b></div>
                                    <div><b><FontAwesomeIcon icon={faAngleRight} className="mr-3"></FontAwesomeIcon></b></div>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between mb-2 pb-2">
                                    <div><FontAwesomeIcon icon={faHeart} className="mr-3"></FontAwesomeIcon><b>Lorem Ipsum</b></div>
                                    <div><b><FontAwesomeIcon icon={faAngleRight} className="mr-3"></FontAwesomeIcon></b></div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                        <div className="bg-white rounded border mb-2">
                            <div className="p-3"> 
                                <h3><b>Checking in & Out</b></h3>
                                <br/><br/>
                                <div>Chekin Instructions</div>
                                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut nulla voluptatibus ut iste perferendis recusandae quos. Libero fugit corporis possimus. Minus fugiat eius enim aperiam cupiditate voluptas. Explicabo, eos.</small>  
                                <br/><br/><br/>
                                <div className="d-flex justify-content-between mb-2 pb-2">
                                    <div><FontAwesomeIcon icon={faHeart} className="mr-3"></FontAwesomeIcon><b>Lorem Ipsum</b></div>
                                    <div><b><FontAwesomeIcon icon={faAngleRight} className="mr-3"></FontAwesomeIcon></b></div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                        <div className="bg-white rounded border mb-2">
                            <div className="p-3"> 
                                <h3><b>Where you're staying?</b></h3>
                                
                                <br/><br/><br/>
                                <div className="d-flex justify-content-between mb-2 pb-2">
                                    <div><FontAwesomeIcon icon={faHeart} className="mr-3"></FontAwesomeIcon><b>Lorem Ipsum</b></div>
                                    <div><b><FontAwesomeIcon icon={faAngleRight} className="mr-3"></FontAwesomeIcon></b></div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                        <div className="bg-white rounded border mb-2">
                            <div className="p-3"> 
                                <h3><b>Your host, Jsoe</b></h3>
                                <div><a href="#">Show Profile</a></div>
                                <br/><br/><br/>
                                <div className="d-flex justify-content-between mb-2 pb-2">
                                    <div><FontAwesomeIcon icon={faHeart} className="mr-3"></FontAwesomeIcon><b>Lorem Ipsum</b></div>
                                    <div><b><FontAwesomeIcon icon={faAngleRight} className="mr-3"></FontAwesomeIcon></b></div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                        <div className="bg-white rounded border mb-2">
                            <div className="p-3"> 
                                <h3><b>Payment Info</b></h3>
                                <br/><br/>
                                <div>Total Cost</div>
                                <div><b>$3791</b></div>
                                <br/><br/>
                                <div className="d-flex justify-content-between mb-2 pb-2">
                                    <div><FontAwesomeIcon icon={faHeart} className="mr-3"></FontAwesomeIcon><b>Lorem Ipsum</b></div>
                                    <div><b><FontAwesomeIcon icon={faAngleRight} className="mr-3"></FontAwesomeIcon></b></div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                        <div className="bg-white rounded border mb-2">
                            <div className="p-3"> 
                                <h3><b>Support</b></h3>
                                <br/><br/>
                                <hr/>
                                <div className="d-flex justify-content-between mb-2 pb-2">
                                    <div><FontAwesomeIcon icon={faHeart} className="mr-3"></FontAwesomeIcon><b>Lorem Ipsum</b></div>
                                    <div><b><FontAwesomeIcon icon={faAngleRight} className="mr-3"></FontAwesomeIcon></b></div>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between mb-2 pb-2">
                                    <div><FontAwesomeIcon icon={faHeart} className="mr-3"></FontAwesomeIcon><b>Lorem Ipsum</b></div>
                                    <div><b><FontAwesomeIcon icon={faAngleRight} className="mr-3"></FontAwesomeIcon></b></div>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between mb-2 pb-2">
                                    <div><FontAwesomeIcon icon={faHeart} className="mr-3"></FontAwesomeIcon><b>Lorem Ipsum</b></div>
                                    <div><b><FontAwesomeIcon icon={faAngleRight} className="mr-3"></FontAwesomeIcon></b></div>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between mb-2 pb-2">
                                    <div><FontAwesomeIcon icon={faHeart} className="mr-3"></FontAwesomeIcon><b>Lorem Ipsum</b></div>
                                    <div><b><FontAwesomeIcon icon={faAngleRight} className="mr-3"></FontAwesomeIcon></b></div>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between mb-2 pb-2">
                                    <div><FontAwesomeIcon icon={faHeart} className="mr-3"></FontAwesomeIcon><b>Lorem Ipsum</b></div>
                                    <div><b><FontAwesomeIcon icon={faAngleRight} className="mr-3"></FontAwesomeIcon></b></div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
export default trips;
