import {useRouter} from 'next/router'
import Layout from '../../components/layout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faStar, faHeart, faBed, faWifi , faShieldAlt} from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { DatePicker, Menu, Dropdown, Button, InputNumber, Progress } from 'antd';
import Map from '../../components/maps'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
const {RangePicker}=DatePicker;
const menu = (
    <Menu>
      <Menu.Item>
        <div className="d-flex justify-content-between align-items-center py-2">
        <div>
          <div className="mr-2">Number of Adults</div>
          <small>Age 18 or above</small>
        </div>
        <InputNumber min={1} max={100000} defaultValue={3} />
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className="d-flex justify-content-between align-items-center py-2">
        <div>
          <div className="mr-2">Number of Children</div>
          <small>Age 10-18</small>
        </div>
        <InputNumber min={1} max={100000} defaultValue={3} />
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className="d-flex justify-content-between align-items-center py-2">
        <div>
          <div className="mr-2">Number of Infants</div>
          <small>Age 2-8</small>
        </div>
        <InputNumber min={1} max={100000} defaultValue={3} />
        </div>
      </Menu.Item>
    </Menu>
  );

const booking = ()=> {
  const router = useRouter();


  return (
    <Layout>
        <div className="navpadding bg-black"></div>
        <div className="container mt-4">
            <h1>
            Bright large window room in Trinity Bell Wood
            </h1>
            <div>
                <span><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon>&nbsp;</span>&nbsp;4.77 <span className="text-muted">(40)</span>&nbsp;&bull;&nbsp;<a href="#">Toronto, Ontario, Canada</a>
            </div>
            <div className="book-img-container">
                <div className="row my-4 mx-0 px-0">
                    <div className="col-md-6 mb-3 mb-md-0"><img className="w-100" style={{borderRadius: " 10px 0 0 10px"}} src="https://a0.muscache.com/im/pictures/e5a16269-3b67-48a7-8972-bb3ea5b12aa1.jpg?im_w=960" alt=""/></div>
                    <div className="col-md-6">
                        <div className="row mb-3">
                            <div className="col-6"><img className="w-100"  src="https://a0.muscache.com/im/pictures/e5a16269-3b67-48a7-8972-bb3ea5b12aa1.jpg?im_w=960" alt=""/></div>
                            <div className="col-6"><img className="w-100" style={{borderRadius: "0 10px 0 0"}}  src="https://a0.muscache.com/im/pictures/e5a16269-3b67-48a7-8972-bb3ea5b12aa1.jpg?im_w=960" alt=""/></div>
                        </div>
                        <div className="row">
                            <div className="col-6"><img className="w-100" src="https://a0.muscache.com/im/pictures/e5a16269-3b67-48a7-8972-bb3ea5b12aa1.jpg?im_w=960" alt=""/></div>
                            <div className="col-6"><img className="w-100" style={{borderRadius: "0 0 10px 0"}}  src="https://a0.muscache.com/im/pictures/e5a16269-3b67-48a7-8972-bb3ea5b12aa1.jpg?im_w=960" alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <div className="my-3">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h2>
                                        Private room in house hosted by Sue
                                    </h2>
                                    <div>
                                        2 guests · 1 bedroom · 1 bed · 1 bathroom
                                    </div>
                                </div>
                                <div>
                                    <img src="https://a0.muscache.com/im/pictures/user/33dbea6b-28e4-4983-a41e-f24e5d98d75b.jpg" className="rounded-cirlcle" style={{width:"50px",height:"50px",borderRadius:"50%"}} alt=""/>
                                </div>
                            </div>
                        </div>
                        <hr className="mb-4"/>
                        <div className="d-flex justify-content-start mb-4">
                            <div className="m-1 mr-3">
                                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                            </div>
                            <div>
                                <b>Enhanced Clean</b>
                                <br/>
                                This host committed to Airbnb's 5-step enhanced cleaning process. <a href="#">Learn More</a>
                            </div>
                            <hr/>
                        </div>
                        <div className="d-flex justify-content-start mb-4">
                            <div className="m-1 mr-3">
                                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                            </div>
                            <div>
                                <b>Enhanced Clean</b>
                                <br/>
                                This host committed to Airbnb's 5-step enhanced cleaning process. <a href="#">Learn More</a>
                            </div>
                            <hr/>
                        </div>
                        <div className="d-flex justify-content-start mb-4">
                            <div className="m-1 mr-3">
                                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                            </div>
                            <div>
                                <b>Enhanced Clean</b>
                                <br/>
                                This host committed to Airbnb's 5-step enhanced cleaning process. <a href="#">Learn More</a>
                            </div>
                            <hr/>
                        </div>
                        <div className="d-flex justify-content-start mb-4">
                            <div className="m-1 mr-3">
                                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                            </div>
                            <div>
                                <b>Enhanced Clean</b>
                                <br/>
                                This host committed to Airbnb's 5-step enhanced cleaning process. <a href="#">Learn More</a>
                            </div>
                            <hr/>
                        </div>
                        <div className="d-flex justify-content-start mb-4">
                            <div className="m-1 mr-3">
                                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                            </div>
                            <div>
                                <b>Enhanced Clean</b>
                                <br/>
                                This host committed to Airbnb's 5-step enhanced cleaning process. <a href="#">Learn More</a>
                            </div>
                            <hr/>
                        </div>
                        <hr/>
                        <div className="my-4">
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugit, veritatis labore dolore fugiat, error harum minima numquam, nulla quod pariatur. Cumque atque, porro quae consequatur maiores tempore recusandae delectus.</p>
                            
                            <a href="#">Contact Host</a>
                            <br/>
                        </div>
                        <hr/>
                        <div className="my-4">
                            <h2 className="mb-4">
                                Sleeping Arrangments
                            </h2>
                            <div className="d-flex justify-content-between">
                                <div className="rounded p-5 border">
                                    <FontAwesomeIcon icon={faBed} size="3x"></FontAwesomeIcon>
                                    <h4>Bedroom 1</h4>
                                    <div>Queen Bed</div>

                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="my-4">
                            <h2 className="mb-4">
                                Amenities
                            </h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="lead"><FontAwesomeIcon icon={faWifi} className="mr-2"></FontAwesomeIcon>Wifi</p>
                                    <p className="lead"><FontAwesomeIcon icon={faWifi} className="mr-2"></FontAwesomeIcon>Wifi</p>
                                    <p className="lead"><FontAwesomeIcon icon={faWifi} className="mr-2"></FontAwesomeIcon>Wifi</p>
                                    <p className="lead"><FontAwesomeIcon icon={faWifi} className="mr-2"></FontAwesomeIcon>Wifi</p>
                                    <p className="lead"><FontAwesomeIcon icon={faWifi} className="mr-2"></FontAwesomeIcon>Wifi</p>
                                    
                                </div>
                                <div className="col-md-6">
                                    <p className="lead"><FontAwesomeIcon icon={faWifi} className="mr-2"></FontAwesomeIcon>Wifi</p>
                                    <p className="lead"><FontAwesomeIcon icon={faWifi} className="mr-2"></FontAwesomeIcon>Wifi</p>
                                    <p className="lead"><FontAwesomeIcon icon={faWifi} className="mr-2"></FontAwesomeIcon>Wifi</p>
                                    <p className="lead"><FontAwesomeIcon icon={faWifi} className="mr-2"></FontAwesomeIcon>Wifi</p>
                                    <p className="lead"><FontAwesomeIcon icon={faWifi} className="mr-2"></FontAwesomeIcon>Wifi</p>
                                </div>
                            </div>
                            <a href="#" className="btn btn-outline-dark mt-4" >See all Amenities</a>
                        </div>
                        <hr/>
                        <div className="my-4" style={{height:"350px"}}>
                            <h4>Select your Checkout Dates</h4>
                            <div className="text-muted mb-4">Select checkout dates for exact pricing</div>
                        <RangePicker size={"large"} style={{width:"100%"}}></RangePicker>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="sticky-top rounded shadow p-3 border" style={{top:"6em"}}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                     <h2>₹1,604/ <small>night</small></h2>
                                </div>
                                <div>
                                    <span><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon>&nbsp;</span>&nbsp;4.77 <span className="text-muted">(40)</span>
                                </div>
                            </div>
                            <div className="border rounded mb-4 border-dark">
                                <div className="border-bottom border-dark">
                                    <div className="d-flex justify-content-arround ">
                                        <div className="p-3 w-50">
                                            <small><b>Checkin</b></small><br/>
                                            12/1/2020
                                        </div>
                                        <div className="border-left border-dark p-3 w-50">
                                            <small><b>Checkout</b></small><br/>
                                            13/1/2020
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 text-center">
                                <Dropdown overlay={menu} placement="bottomRight">
                                    <Button className="border-0 btn btn-block h-100 text-muted">9 Guests</Button>
                                </Dropdown>
                                </div>
                                
                            </div>
                            <a href="#" className="btn btn-block btn-theme btn-lg">Check Availability</a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <hr/>
            <div className="my-4">
                <h2><span><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon>&nbsp;</span>&nbsp;4.77 <span className="text-muted">(40 Reviews)</span></h2>
                <div className="row mt-4">   
                    <div className="col-md-6">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <div><p className="lead">Cleanliness</p></div>
                            <Progress percent={81} size="small" className="w-50"></Progress>
                        </div>
                        <div className="d-flex justify-content-between align-items-baseline">
                            <div><p className="lead">Cleanliness</p></div>
                            <Progress percent={81} size="small" className="w-50"></Progress>
                        </div>
                        <div className="d-flex justify-content-between align-items-baseline">
                            <div><p className="lead">Cleanliness</p></div>
                            <Progress percent={81} size="small" className="w-50"></Progress>
                        </div>
                        <div className="mt-4">
                            <div className="d-flex justify-content-start mb-4">
                                <img src="https://a0.muscache.com/im/pictures/user/f95b6593-fa10-4516-9077-1f5e5127a1a4.jpg" className="mr-2" style={{height:"60px",width:"60px",borderRadius:"50%",objectFit:"cover"}} alt=""/>
                                <div>
                                    <h4>Wai Suet Gi Gi</h4>
                                    <div>October 2020</div>
                                    <br/>
                                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore facilis atque ex eaque maiores hic velit repellat vero nam, molestias accusamus optio iure quaerat tempora quos ut quibusdam nisi sunt!
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start mb-4">
                                <img src="https://a0.muscache.com/im/pictures/user/f95b6593-fa10-4516-9077-1f5e5127a1a4.jpg" className="mr-2" style={{height:"60px",width:"60px",borderRadius:"50%",objectFit:"cover"}} alt=""/>
                                <div>
                                    <h4>Wai Suet Gi Gi</h4>
                                    <div>October 2020</div>
                                    <br/>
                                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore facilis atque ex eaque maiores hic velit repellat vero nam, molestias accusamus optio iure quaerat tempora quos ut quibusdam nisi sunt!
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start mb-4">
                                <img src="https://a0.muscache.com/im/pictures/user/f95b6593-fa10-4516-9077-1f5e5127a1a4.jpg" className="mr-2" style={{height:"60px",width:"60px",borderRadius:"50%",objectFit:"cover"}} alt=""/>
                                <div>
                                    <h4>Wai Suet Gi Gi</h4>
                                    <div>October 2020</div>
                                    <br/>
                                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore facilis atque ex eaque maiores hic velit repellat vero nam, molestias accusamus optio iure quaerat tempora quos ut quibusdam nisi sunt!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <div><p className="lead">Cleanliness</p></div>
                            <Progress percent={81} size="small" className="w-50"></Progress>
                        </div>
                        <div className="d-flex justify-content-between align-items-baseline">
                            <div><p className="lead">Cleanliness</p></div>
                            <Progress percent={81} size="small" className="w-50"></Progress>
                        </div>
                        <div className="d-flex justify-content-between align-items-baseline">
                            <div><p className="lead">Cleanliness</p></div>
                            <Progress percent={81} size="small" className="w-50"></Progress>
                        </div>
                        <div className="mt-4">
                            <div className="d-flex justify-content-start mb-4">
                                <img src="https://a0.muscache.com/im/pictures/user/f95b6593-fa10-4516-9077-1f5e5127a1a4.jpg" className="mr-2" style={{height:"60px",width:"60px",borderRadius:"50%",objectFit:"cover"}} alt=""/>
                                <div>
                                    <h4>Wai Suet Gi Gi</h4>
                                    <div>October 2020</div>
                                    <br/>
                                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore facilis atque ex eaque maiores hic velit repellat vero nam, molestias accusamus optio iure quaerat tempora quos ut quibusdam nisi sunt!
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start mb-4">
                                <img src="https://a0.muscache.com/im/pictures/user/f95b6593-fa10-4516-9077-1f5e5127a1a4.jpg" className="mr-2" style={{height:"60px",width:"60px",borderRadius:"50%",objectFit:"cover"}} alt=""/>
                                <div>
                                    <h4>Wai Suet Gi Gi</h4>
                                    <div>October 2020</div>
                                    <br/>
                                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore facilis atque ex eaque maiores hic velit repellat vero nam, molestias accusamus optio iure quaerat tempora quos ut quibusdam nisi sunt!
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start mb-4">
                                <img src="https://a0.muscache.com/im/pictures/user/f95b6593-fa10-4516-9077-1f5e5127a1a4.jpg" className="mr-2" style={{height:"60px",width:"60px",borderRadius:"50%",objectFit:"cover"}} alt=""/>
                                <div>
                                    <h4>Wai Suet Gi Gi</h4>
                                    <div>October 2020</div>
                                    <br/>
                                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore facilis atque ex eaque maiores hic velit repellat vero nam, molestias accusamus optio iure quaerat tempora quos ut quibusdam nisi sunt!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content mt-4">
                    <a href="" className="btn btn-outline-dark">Show All 40 Reviews</a>
                </div>
            </div>
            <hr/>
            <div className="my-4">
                <h3>Location</h3>
                <h5 className="text-muted">Toronto, Ontario, Canada</h5>
                <div className="w-100 position-relative clearfix" style={{height:"100vh"}}>
                    <Map></Map>
                </div>
            </div>
            <hr/>
            <div className="my-4">
                
                <div className="w-100 position-relative clearfix">
                <div className="d-flex justify-content-start mb-4">
                    <img src="https://a0.muscache.com/im/pictures/user/f95b6593-fa10-4516-9077-1f5e5127a1a4.jpg" className="mr-2" style={{height:"100px",width:"100px",borderRadius:"50%",objectFit:"cover"}} alt=""/>
                    <div>
                        <h4>Hosted by Wai Suet Gi Gi</h4>
                        <div>Joined on October 2020</div>
                        <div><span><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon>&nbsp;</span>&nbsp;4.77 <span className="text-muted">(40 Reviews)</span>&nbsp;&nbsp;&nbsp;&nbsp;<span><FontAwesomeIcon icon={faShieldAlt} className="text-theme"></FontAwesomeIcon></span>&nbsp;Profile Verified</div>
                        <br/>
                        <div>
                            <p className="lead">
                            Languages: 中文 (简体), English
                            </p>
                            <p className="lead">
                            Response rate: 100%
                            </p>
                            <p className="lead">
                            Response time: within an hour
                            </p>
                        </div>
                        <div className="mt-4">
                            <a href="" className="btn btn-outline-dark">Contact Host</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="my-4 otherplaces">
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={false} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                <div className="m-3">
                    <img src="https://a0.muscache.com/im/pictures/user/f95b6593-fa10-4516-9077-1f5e5127a1a4.jpg" className="w-100 shadow rounded" />
                    <div className="mt-4"><span><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon>&nbsp;</span>&nbsp;4.77 <span className="text-muted">(40 Reviews)</span></div>
                    <div>
                        Hotek Room &bull; 1 Bedroom
                    </div>
                    <div>
                        Studio Room at Botique Hotel in ...
                    </div>
                    <div>
                        <b>$6912</b> / night
                    </div>
                </div>
                <div className="m-3">
                    <img src="https://a0.muscache.com/im/pictures/user/f95b6593-fa10-4516-9077-1f5e5127a1a4.jpg" className="w-100 shadow rounded" />
                    <div className="mt-4"><span><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon>&nbsp;</span>&nbsp;4.77 <span className="text-muted">(40 Reviews)</span></div>
                    <div>
                        Hotek Room &bull; 1 Bedroom
                    </div>
                    <div>
                        Studio Room at Botique Hotel in ...
                    </div>
                    <div>
                        <b>$6912</b> / night
                    </div>
                </div>
                <div className="m-3">
                    <img src="https://a0.muscache.com/im/pictures/d1a8e46c-00bb-4c02-b10b-c0a46e11a180.jpg" className="w-100 shadow rounded" />
                    <div className="mt-4"><span><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon>&nbsp;</span>&nbsp;4.77 <span className="text-muted">(40 Reviews)</span></div>
                    <div>
                        Hotek Room &bull; 1 Bedroom
                    </div>
                    <div>
                        Studio Room at Botique Hotel in ...
                    </div>
                    <div>
                        <b>$6912</b> / night
                    </div>
                </div>
                <div className="m-3">
                    <img src="https://a0.muscache.com/im/pictures/fd00d8c4-ebc1-4680-9623-f3cdd5f6310b.jpg" className="w-100 shadow rounded" />
                    <div className="mt-4"><span><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon>&nbsp;</span>&nbsp;4.77 <span className="text-muted">(40 Reviews)</span></div>
                    <div>
                        Hotek Room &bull; 1 Bedroom
                    </div>
                    <div>
                        Studio Room at Botique Hotel in ...
                    </div>
                    <div>
                        <b>$6912</b> / night
                    </div>
                </div>
                
                </Carousel>
            </div>
        </div>
        <div className="bg-light w-100">
            <div className="container otherexp">
            <hr/>
            <div className="mt-4 pb-4">
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={false} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                <div className="m-3">
                    <img src="https://a0.muscache.com/im/pictures/user/f95b6593-fa10-4516-9077-1f5e5127a1a4.jpg" className="w-100 shadow rounded" />
                    <div className="mt-4"><span><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon>&nbsp;</span>&nbsp;4.77 <span className="text-muted">(40 Reviews)</span></div>
                    <div>
                        Hotek Room &bull; 1 Bedroom
                    </div>
                    <div>
                        Studio Room at Botique Hotel in ...
                    </div>
                    <div>
                        <b>$6912</b> / night
                    </div>
                </div>
                
                <div className="m-3">
                    <img src="https://a0.muscache.com/im/pictures/d1a8e46c-00bb-4c02-b10b-c0a46e11a180.jpg" className="w-100 shadow rounded" />
                    <div className="mt-4"><span><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon>&nbsp;</span>&nbsp;4.77 <span className="text-muted">(40 Reviews)</span></div>
                    <div>
                        Hotek Room &bull; 1 Bedroom
                    </div>
                    <div>
                        Studio Room at Botique Hotel in ...
                    </div>
                    <div>
                        <b>$6912</b> / night
                    </div>
                </div>
                <div className="m-3">
                    <img src="https://a0.muscache.com/im/pictures/fd00d8c4-ebc1-4680-9623-f3cdd5f6310b.jpg" className="w-100 shadow rounded" />
                    <div className="mt-4"><span><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon>&nbsp;</span>&nbsp;4.77 <span className="text-muted">(40 Reviews)</span></div>
                    <div>
                        Hotek Room &bull; 1 Bedroom
                    </div>
                    <div>
                        Studio Room at Botique Hotel in ...
                    </div>
                    <div>
                        <b>$6912</b> / night
                    </div>
                </div>
                
                </Carousel>
            </div>
            </div>
        </div>
    </Layout>
  )
}
export default booking;