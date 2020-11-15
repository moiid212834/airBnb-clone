import {useRouter} from 'next/router'
import Layout from '../../components/layout'
import { DatePicker, Menu, Dropdown, Button,InputNumber } from 'antd';
import PlaceSelect from '../../components/places'

const { RangePicker } = DatePicker;
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
const home = ()=> {
  const router = useRouter();
  return (
    <Layout>
      <div className="w-100" style={{backgroundImage:"url('/images/landing.jpg')",height:"600px",backgroundSize:"cover",backgroundPosition:"center center"}}>
      <div className="navpadding"></div>
      
      <div>
        <ul className="menu2">
          <li><a href="#">Places to stay</a></li>
            <li><a href="#">Expeirences</a></li>
            <li><a href="#">Online Expeirences</a></li>
        </ul>
      </div>
      <div className="container">
        <div className="bg-white indexnav shadow text-center d-flex flex-row justify-content-between">
          <div className="btn btn-light bg-white btn-block p-3 m-0">
            <PlaceSelect></PlaceSelect>
          </div>
          
          <RangePicker size={"large"} style={{width:"185%"}}></RangePicker>
          
          <div className="bg-white rounded btn-block p-0 m-0 border-left">
          <Dropdown overlay={menu} placement="bottomRight">
            <Button className="border-0 btn btn-block h-100 text-muted">Guests</Button>
          </Dropdown>
          </div>
        </div>
      </div>
      <div className="p-5 ">
        <div className="w-100 display-1 font-weight-bolder text-white">
          Go <br/>
          Near
        </div>
        <div className="btn btn-sm btn-light m-2">Explore Nearby Locations</div>
      </div>
      </div>
      <div className='container my-4'>
        <div id="nearby-places" className="row">
          <div className="col-md-3 col-6">
            <div className="d-flex flex-row jusitfy-content-between">
            <img src="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg" style={{width:"80px"}} className="img-thumbnail rounded m-2" alt=""/>
            <div className="d-flex flex-column justify-content-center">
              <div><b>Muree</b></div>
              <small>1 hour drive</small>
            </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="d-flex flex-row jusitfy-content-between">
            <img src="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg" style={{width:"80px"}} className="img-thumbnail rounded m-2" alt=""/>
            <div className="d-flex flex-column justify-content-center ">
              <div><b>Muree</b></div>
              <small>1 hour drive</small>
            </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="d-flex flex-row jusitfy-content-between">
            <img src="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg" style={{width:"80px"}} className="img-thumbnail rounded m-2" alt=""/>
            <div className="d-flex flex-column justify-content-center ">
              <div><b>Muree</b></div>
              <small>1 hour drive</small>
            </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="d-flex flex-row jusitfy-content-between">
            <img src="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg" style={{width:"80px"}} className="img-thumbnail rounded m-2" alt=""/>
            <div className="d-flex flex-column justify-content-center ">
              <div><b>Muree</b></div>
              <small>1 hour drive</small>
            </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="d-flex flex-row jusitfy-content-between">
            <img src="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg" style={{width:"80px"}} className="img-thumbnail rounded m-2" alt=""/>
            <div className="d-flex flex-column justify-content-center ">
              <div><b>Muree</b></div>
              <small>1 hour drive</small>
            </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="d-flex flex-row jusitfy-content-between">
            <img src="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg" style={{width:"80px"}} className="img-thumbnail rounded m-2" alt=""/>
            <div className="d-flex flex-column justify-content-center ">
              <div><b>Muree</b></div>
              <small>1 hour drive</small>
            </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="d-flex flex-row jusitfy-content-between">
            <img src="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg" style={{width:"80px"}} className="img-thumbnail rounded m-2" alt=""/>
            <div className="d-flex flex-column justify-content-center ">
              <div><b>Muree</b></div>
              <small>1 hour drive</small>
            </div>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="d-flex flex-row jusitfy-content-between">
            <img src="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg" style={{width:"80px"}} className="img-thumbnail rounded m-2" alt=""/>
            <div className="d-flex flex-column justify-content-center">
              <div><b>Muree</b></div>
              <small>1 hour drive</small>
            </div>
            </div>
          </div>
        </div>
        <div id="live-anywhere" className="my-4">
          <h1>Live Anywhere</h1>
          <div className="row">
            <div className="col-md-3">
              <div className="my-2">
                <img src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg" style={{width:"100%"}} className="rounded shadow" alt=""/>
                <h4 className="my-2">Entire Homes</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="my-2">
                <img src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg" style={{width:"100%"}} className="rounded shadow" alt=""/>
                <h4 className="my-2">Entire Homes</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="my-2">
                <img src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg" style={{width:"100%"}} className="rounded shadow" alt=""/>
                <h4 className="my-2">Entire Homes</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="my-2">
                <img src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg" style={{width:"100%"}} className="rounded shadow" alt=""/>
                <h4 className="my-2">Entire Homes</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="online-experiences" className="my-4 py-4 bg-black">
        <div className="container">
        <div className="d-flex flex-row justify-content-between w-100 my-4">
          <div className="text-light"> 
            <h2 >
              Meet online Expeirences
              <br/>
              
            </h2>
            <h6>Interactive activities you can do together, led by expert hosts.</h6>
          </div>
          <div>
            <a href="" className="btn btn-outline-light">
              Explore All
            </a>
          </div>
        </div>
          <div className="row">
            <div className="col-md-6 overflow-hidden">
              <div className="card my-3 border-0 rounded h-100 bg-black" style={{paddingBottom:"31px"}}>
                <img className="card-img-top" src="https://a0.muscache.com/im/pictures/50109909-bdb5-47d4-8883-e0e6fd00c18c.jpg" alt="card my-3 image cap"/>
                <div className="card-body bg-dark-grey">
                  <p className="card-text font-weight-bolder text-light ">Some quick example text to build on the card my-3 title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <div className="card my-3 border-0 rounded">
                    <img className="card-img-top" src="https://a0.muscache.com/im/pictures/50109909-bdb5-47d4-8883-e0e6fd00c18c.jpg" alt="card my-3 image cap"/>
                    <div className="card-body bg-dark-grey">
                      <p className="card-text font-weight-bolder text-light ">Some quick example text to build on the card my-3 title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card my-3 border-0 rounded">
                    <img className="card-img-top" src="https://a0.muscache.com/im/pictures/50109909-bdb5-47d4-8883-e0e6fd00c18c.jpg" alt="card my-3 image cap"/>
                    <div className="card-body bg-dark-grey">
                      <p className="card-text font-weight-bolder text-light ">Some quick example text to build on the card my-3 title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                 <div className="card my-3 border-0 rounded">
                    <img className="card-img-top" src="https://a0.muscache.com/im/pictures/50109909-bdb5-47d4-8883-e0e6fd00c18c.jpg" style={{height:"200px", objectFit:"cover",objectPosition:"top center"}} alt="card my-3 image cap"/>
                    <div className="card-body bg-dark-grey">
                      <p className="card-text font-weight-bolder text-light ">Some quick example text to build on the card my-3 title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>    
        </div>
      </div>
      <div id="hosts" className="container"> 
      <div id="live-anywhere" className="my-4">
          <h1>Join millions of hosts on Airbnb</h1>
          <div className="row">
            <div className="col-md-4">
              <div className="my-2">
                <img src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg" style={{width:"100%"}} className="rounded shadow" alt=""/>
                <h4 className="my-2">Host Your Home</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="my-2">
                <img src="https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg" style={{width:"100%"}} className="rounded shadow" alt=""/>
                <h4 className="my-2">Host an Online Experience</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="my-2">
                <img src="https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg" style={{width:"100%"}} className="rounded shadow" alt=""/>
                <h4 className="my-2">Host an Expeirence</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default home;