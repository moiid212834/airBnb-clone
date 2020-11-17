import {useRouter} from 'next/router'
import Layout from '../../components/layout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faAngleLeft, faStar, faClock, faLock} from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { DatePicker, Menu, Dropdown, Button, InputNumber, Progress } from 'antd';
import Map from '../../components/maps';
import { Switch } from 'antd';
import CreditCardInput from 'react-credit-card-input';

const booking = ()=> {
  const router = useRouter();


  return (
    <Layout>
        <div className="navpadding bg-black"></div>
        <div className="container">
            <div className="w-100 text-left">
                <FontAwesomeIcon icon={faAngleLeft} size="2x"></FontAwesomeIcon>
                <div><h2 className="my-2">Request to Book</h2></div>
            </div>
            <div className="row flex-wrap-reverse">   
                <div className="col-md-6">
                    <div className="my-3">
                        
                        <h5>Good Price</h5>
                        <p className="text-muted font-weight-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur vitae autem reiciendis excepturi dolorum dolores illum architecto, rem accusamus amet neque eveniet, consectetur tenetur consequatur pariatur, impedit et nisi veritatis.</p>
                        <hr className="my-5"/>
                        <div className="mt-4">
                            <div className="d-flex justify-content-between mb-2">
                                <div>
                                    <h5>Your Dates</h5>
                                    <p className="text-muted font-weight-bold">Nov 3,2020 - Nov 8,2020</p>
                                    </div>
                                <div>  <a href="#">Edit</a></div>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <div>
                                    <h5>Your Guests</h5>
                                    <p className="text-muted font-weight-bold">2 Guests</p>
                                    </div>
                                <div>  <a href="#">Edit</a></div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-5"/>
                    <div className="my-4">
                        <div className="d-flex justify-content-between mb-2">
                            <div><b>Is this a work trip?</b></div>
                            <div><Switch></Switch></div>
                        </div>
                        <div className="d-flex flex-row justify-content-between mb-2">
                            <div style={{width:"50%"}}><b>Pay with</b></div>
                            <div className="text-right"><img src="https://logodix.com/logo/780370.png" alt="" style={{width:"50%"}}/></div>
                        </div>
                        <div className="mt-4 pt-3 mb-1">
                        <CreditCardInput
                            fieldClassName="input w-100 border rounded"
                            />
                        </div>
                        <small><a href="">Enter a Coupon</a></small>
                    </div>
                    <hr className="my-5"/>
                    <div className="my-4">
                        <h3>Required for your trip</h3>
                        <div><b>Your Message for the Host</b></div>
                        <small>Lorem Ipsum dolor set amet</small>
                        <br/>
                        <br/>
                        <textarea name="" className="form-control" id="" cols="30" rows="10"></textarea>
                    </div>
                    <hr className="my-5"/>
                    <div className="my-4">
                        <div className="border-left border-warning p-3" style={{borderLeft:"solid 10px #ffc107!important"}}>
                            <h4>Cancelation Policy</h4>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia delectus aliquam. Necessitatibus ad illum mollitia, et quidem reiciendis minus adipisci earum debitis voluptatem veritatis facere fugit repellat nisi nulla!
                                <br/><br/>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ad doloremque, corporis vero repellendus hic suscipit minima eaque aliquam illo illum expedita dicta, architecto cupiditate accusamus provident quidem est. Ipsum.
                            </div>
                        </div>
                        <div className="my-5">
                            <FontAwesomeIcon icon={faClock} size="2x" className="m-3 float-left"></FontAwesomeIcon>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, tempora. Iste, velit. Iure odio similique ipsa optio illo tempora. <br/><small>You wont be charged until then</small>
                        </div>
                        <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque earum tempora at saepe, ea quod et? Qui suscipit ullam, recusandae, fugit quos magni asperiores cupiditate sit blanditiis illo cumque eius.</small>
                        <div className="my-5">
                            <a href="" className="btn btn-theme btn-lg">
                                <FontAwesomeIcon icon={faLock} className="mr-3"></FontAwesomeIcon>Request to Book
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mt-2 mb-4 mx-3 sticky-top" style={{top:'6em'}}>
                        <div className="border rounded shadow p-3">
                            <div className=" d-flex flex-row align-items-start justify-content-start mb-4 flex-md-nowrap flex-wrap">
                                <img src="https://pix10.agoda.net/hotelImages/1269933/-1/e426483a11b42f1773217818c8854c08.jpg" style={{width:"150px"}} className="rounded mr-2" alt=""/>
                                <div className="w-100 mb4">
                                    <div className="d-flex flex-row justify-content-between w-100">
                                        <div><small>Private room in trinity bellwoods</small></div>
                                    </div>
                                    <div><b>2 Guests - 1 bedroom - 1 bed - 1 bath</b></div>
                                    <div className="d-flex justify-content-between flex-row align-items-baseline">
                                        <div className="h-100 align-self-baseline"><br/><FontAwesomeIcon icon={faStar} className="text-theme"></FontAwesomeIcon> <b>4.9 </b>(46)
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div>
                                <div className="d-flex justify-content-between mb-2">
                                    <div><a href="">Lorem Ipsum</a></div>
                                    <div>$78</div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <div><a href="">Lorem Ipsum</a></div>
                                    <div>$78</div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <div><a href="">Lorem Ipsum</a></div>
                                    <div>$78</div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <div><a href="">Lorem Ipsum</a></div>
                                    <div>$78</div>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <div><b>Total</b></div>
                                    <div><b>${78*4}</b></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}
export default booking;