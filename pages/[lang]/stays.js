import {useRouter} from 'next/router'
import Layout from '../../components/layout'
import Maps from '../../components/maps'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import React, {useState, useEffect} from 'react'
import { Pagination } from 'antd';
const stays = ()=> {
  const router = useRouter();

  return (
    <Layout>
        <div className="navpadding bg-black"></div>
      <div className="container-fluid">
          <div className="row"  style={{minHeight:"100vh"}}>
              <div className="col">
                  <div className="mt-4">
                    <p>300 stays - Nov,3 2020 - 2 guests</p>
                    <h1>Stays in Toronto</h1>
                    <div className="d-flex flex-row justify-content-start flex-wrap">
                        <a className="rounded shadow-sm p-2 my-2 mx-1 btn btn-light btn-sm border">Cancelation Flexibility</a>
                        <a className="rounded shadow-sm p-2 my-2 mx-1 btn btn-light btn-sm border">Type of Place</a>
                        <a className="rounded shadow-sm p-2 my-2 mx-1 btn btn-light btn-sm border">Price</a>
                        <a className="rounded shadow-sm p-2 my-2 mx-1 btn btn-light btn-sm border">Instant Book</a>
                        <a className="rounded shadow-sm p-2 my-2 mx-1 btn btn-light btn-sm border">More filters</a>
                    </div>
                  </div>
                  <div className="my-2 pt-3 border-top">
                    <div className=" d-flex flex-row align-items-start justify-content-start mb-4">
                        <img src="https://pix10.agoda.net/hotelImages/1269933/-1/e426483a11b42f1773217818c8854c08.jpg" style={{width:"380px"}} className="rounded mr-2" alt=""/>
                        <div className="w-100 mb4">
                            <div className="d-flex flex-row justify-content-between w-100">
                                <div><small>Private room in trinity bellwoods</small></div>
                                <div><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></div>
                            </div>
                            <h3>Lorem Ipsum Dolor Sit Amet</h3>
                            <hr className="w-25 text-dark my-1 bg-dark text-left float-left"/><br/>
                            <small>2 Guests - 1 bedroom - 1 bed - 1 bath</small><br/>
                            <small>Kitchen - WiFi - Air Conditioning - Self Check-in</small><br/>
                            <a className="rounded p-2 my-2 mx-1 btn btn-light btn-sm border">Rare Find</a>
                            <div className="d-flex justify-content-between flex-row align-items-baseline">
                                <div className="h-100 align-self-baseline"><br/><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon> <b>4.9 </b>(46)</div>
                                <div>
                                    <h5><del  className="text-muted">$67</del><span className="ml-2">$59</span> / Night</h5>
                                    <div>$1621 Total</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" d-flex flex-row align-items-start justify-content-start mb-4">
                        <img src="https://pix10.agoda.net/hotelImages/1269933/-1/e426483a11b42f1773217818c8854c08.jpg" style={{width:"380px"}} className="rounded mr-2" alt=""/>
                        <div className="w-100 mb4">
                            <div className="d-flex flex-row justify-content-between w-100">
                                <div><small>Private room in trinity bellwoods</small></div>
                                <div><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></div>
                            </div>
                            <h3>Lorem Ipsum Dolor Sit Amet</h3>
                            <hr className="w-25 text-dark my-1 bg-dark text-left float-left"/><br/>
                            <small>2 Guests - 1 bedroom - 1 bed - 1 bath</small><br/>
                            <small>Kitchen - WiFi - Air Conditioning - Self Check-in</small><br/>
                            <a className="rounded p-2 my-2 mx-1 btn btn-light btn-sm border">Rare Find</a>
                            <div className="d-flex justify-content-between flex-row align-items-baseline">
                                <div className="h-100 align-self-baseline"><br/><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon> <b>4.9 </b>(46)</div>
                                <div>
                                    <h5><del  className="text-muted">$67</del><span className="ml-2">$59</span> / Night</h5>
                                    <div>$1621 Total</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" d-flex flex-row align-items-start justify-content-start mb-4">
                        <img src="https://pix10.agoda.net/hotelImages/1269933/-1/e426483a11b42f1773217818c8854c08.jpg" style={{width:"380px"}} className="rounded mr-2" alt=""/>
                        <div className="w-100 mb4">
                            <div className="d-flex flex-row justify-content-between w-100">
                                <div><small>Private room in trinity bellwoods</small></div>
                                <div><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></div>
                            </div>
                            <h3>Lorem Ipsum Dolor Sit Amet</h3>
                            <hr className="w-25 text-dark my-1 bg-dark text-left float-left"/><br/>
                            <small>2 Guests - 1 bedroom - 1 bed - 1 bath</small><br/>
                            <small>Kitchen - WiFi - Air Conditioning - Self Check-in</small><br/>
                            <a className="rounded p-2 my-2 mx-1 btn btn-light btn-sm border">Rare Find</a>
                            <div className="d-flex justify-content-between flex-row align-items-baseline">
                                <div className="h-100 align-self-baseline"><br/><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon> <b>4.9 </b>(46)</div>
                                <div>
                                    <h5><del  className="text-muted">$67</del><span className="ml-2">$59</span> / Night</h5>
                                    <div>$1621 Total</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" d-flex flex-row align-items-start justify-content-start mb-4">
                        <img src="https://pix10.agoda.net/hotelImages/1269933/-1/e426483a11b42f1773217818c8854c08.jpg" style={{width:"380px"}} className="rounded mr-2" alt=""/>
                        <div className="w-100 mb4">
                            <div className="d-flex flex-row justify-content-between w-100">
                                <div><small>Private room in trinity bellwoods</small></div>
                                <div><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></div>
                            </div>
                            <h3>Lorem Ipsum Dolor Sit Amet</h3>
                            <hr className="w-25 text-dark my-1 bg-dark text-left float-left"/><br/>
                            <small>2 Guests - 1 bedroom - 1 bed - 1 bath</small><br/>
                            <small>Kitchen - WiFi - Air Conditioning - Self Check-in</small><br/>
                            <a className="rounded p-2 my-2 mx-1 btn btn-light btn-sm border">Rare Find</a>
                            <div className="d-flex justify-content-between flex-row align-items-baseline">
                                <div className="h-100 align-self-baseline"><br/><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon> <b>4.9 </b>(46)</div>
                                <div>
                                    <h5><del  className="text-muted">$67</del><span className="ml-2">$59</span> / Night</h5>
                                    <div>$1621 Total</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" d-flex flex-row align-items-start justify-content-start mb-4">
                        <img src="https://pix10.agoda.net/hotelImages/1269933/-1/e426483a11b42f1773217818c8854c08.jpg" style={{width:"380px"}} className="rounded mr-2" alt=""/>
                        <div className="w-100 mb4">
                            <div className="d-flex flex-row justify-content-between w-100">
                                <div><small>Private room in trinity bellwoods</small></div>
                                <div><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></div>
                            </div>
                            <h3>Lorem Ipsum Dolor Sit Amet</h3>
                            <hr className="w-25 text-dark my-1 bg-dark text-left float-left"/><br/>
                            <small>2 Guests - 1 bedroom - 1 bed - 1 bath</small><br/>
                            <small>Kitchen - WiFi - Air Conditioning - Self Check-in</small><br/>
                            <a className="rounded p-2 my-2 mx-1 btn btn-light btn-sm border">Rare Find</a>
                            <div className="d-flex justify-content-between flex-row align-items-baseline">
                                <div className="h-100 align-self-baseline"><br/><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon> <b>4.9 </b>(46)</div>
                                <div>
                                    <h5><del  className="text-muted">$67</del><span className="ml-2">$59</span> / Night</h5>
                                    <div>$1621 Total</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" d-flex flex-row align-items-start justify-content-start mb-4">
                        <img src="https://pix10.agoda.net/hotelImages/1269933/-1/e426483a11b42f1773217818c8854c08.jpg" style={{width:"380px"}} className="rounded mr-2" alt=""/>
                        <div className="w-100 mb4">
                            <div className="d-flex flex-row justify-content-between w-100">
                                <div><small>Private room in trinity bellwoods</small></div>
                                <div><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></div>
                            </div>
                            <h3>Lorem Ipsum Dolor Sit Amet</h3>
                            <hr className="w-25 text-dark my-1 bg-dark text-left float-left"/><br/>
                            <small>2 Guests - 1 bedroom - 1 bed - 1 bath</small><br/>
                            <small>Kitchen - WiFi - Air Conditioning - Self Check-in</small><br/>
                            <a className="rounded p-2 my-2 mx-1 btn btn-light btn-sm border">Rare Find</a>
                            <div className="d-flex justify-content-between flex-row align-items-baseline">
                                <div className="h-100 align-self-baseline"><br/><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon> <b>4.9 </b>(46)</div>
                                <div>
                                    <h5><del  className="text-muted">$67</del><span className="ml-2">$59</span> / Night</h5>
                                    <div>$1621 Total</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" d-flex flex-row align-items-start justify-content-start mb-4">
                        <img src="https://pix10.agoda.net/hotelImages/1269933/-1/e426483a11b42f1773217818c8854c08.jpg" style={{width:"380px"}} className="rounded mr-2" alt=""/>
                        <div className="w-100 mb4">
                            <div className="d-flex flex-row justify-content-between w-100">
                                <div><small>Private room in trinity bellwoods</small></div>
                                <div><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></div>
                            </div>
                            <h3>Lorem Ipsum Dolor Sit Amet</h3>
                            <hr className="w-25 text-dark my-1 bg-dark text-left float-left"/><br/>
                            <small>2 Guests - 1 bedroom - 1 bed - 1 bath</small><br/>
                            <small>Kitchen - WiFi - Air Conditioning - Self Check-in</small><br/>
                            <a className="rounded p-2 my-2 mx-1 btn btn-light btn-sm border">Rare Find</a>
                            <div className="d-flex justify-content-between flex-row align-items-baseline">
                                <div className="h-100 align-self-baseline"><br/><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon> <b>4.9 </b>(46)</div>
                                <div>
                                    <h5><del  className="text-muted">$67</del><span className="ml-2">$59</span> / Night</h5>
                                    <div>$1621 Total</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" d-flex flex-row align-items-start justify-content-start mb-4">
                        <img src="https://pix10.agoda.net/hotelImages/1269933/-1/e426483a11b42f1773217818c8854c08.jpg" style={{width:"380px"}} className="rounded mr-2" alt=""/>
                        <div className="w-100 mb4">
                            <div className="d-flex flex-row justify-content-between w-100">
                                <div><small>Private room in trinity bellwoods</small></div>
                                <div><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></div>
                            </div>
                            <h3>Lorem Ipsum Dolor Sit Amet</h3>
                            <hr className="w-25 text-dark my-1 bg-dark text-left float-left"/><br/>
                            <small>2 Guests - 1 bedroom - 1 bed - 1 bath</small><br/>
                            <small>Kitchen - WiFi - Air Conditioning - Self Check-in</small><br/>
                            <a className="rounded p-2 my-2 mx-1 btn btn-light btn-sm border">Rare Find</a>
                            <div className="d-flex justify-content-between flex-row align-items-baseline">
                                <div className="h-100 align-self-baseline"><br/><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon> <b>4.9 </b>(46)</div>
                                <div>
                                    <h5><del  className="text-muted">$67</del><span className="ml-2">$59</span> / Night</h5>
                                    <div>$1621 Total</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" d-flex flex-row align-items-start justify-content-start mb-4">
                        <img src="https://pix10.agoda.net/hotelImages/1269933/-1/e426483a11b42f1773217818c8854c08.jpg" style={{width:"380px"}} className="rounded mr-2" alt=""/>
                        <div className="w-100 mb4">
                            <div className="d-flex flex-row justify-content-between w-100">
                                <div><small>Private room in trinity bellwoods</small></div>
                                <div><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></div>
                            </div>
                            <h3>Lorem Ipsum Dolor Sit Amet</h3>
                            <hr className="w-25 text-dark my-1 bg-dark text-left float-left"/><br/>
                            <small>2 Guests - 1 bedroom - 1 bed - 1 bath</small><br/>
                            <small>Kitchen - WiFi - Air Conditioning - Self Check-in</small><br/>
                            <a className="rounded p-2 my-2 mx-1 btn btn-light btn-sm border">Rare Find</a>
                            <div className="d-flex justify-content-between flex-row align-items-baseline">
                                <div className="h-100 align-self-baseline"><br/><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon> <b>4.9 </b>(46)</div>
                                <div>
                                    <h5><del  className="text-muted">$67</del><span className="ml-2">$59</span> / Night</h5>
                                    <div>$1621 Total</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                  </div>
                  <div className="text-center mb-4">
                  <Pagination defaultCurrent={1} total={50} />
                  </div>
              </div>
              <div className="col-md-5 position-relative pr-0 mr-0">
                  <div className="sticky-top clearfix mb-4" style={{top:"60px",height:"100vh", overflow:"hidden"}}>
                  <div id="map"  >
                    <Maps></Maps>
                  </div>
                  </div>
              </div>
          </div>
      </div>
    </Layout>
  )
}
export default stays;
