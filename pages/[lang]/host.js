import {useRouter} from 'next/router'
import Layout from '../../components/layout'
import React, {} from 'react'
import { Tabs } from 'antd';
import { Card,Select } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {faCheckCircle, faQuoteLeft} from "@fortawesome/free-solid-svg-icons"; // import the icons you need
const { Option } = Select;

const hosts = ()=> {

  return (
    <Layout>
    <div className="w-100" style={{backgroundImage:"url('https://www.homelight.com/blog/wp-content/uploads/2019/06/front-yard-curb-appeal-.png')",height:"620px",backgroundSize:"cover",backgroundPosition:"center center"}}>
        <div className="navpadding"></div>
        <div className="row h-100 align-items-baseline">
            <div className="col-md-8 offset-md-3 position-relative">
                <div className="container-fluid bg-white rounded shadow position-absolute p-3" style={{top:"120px",right:"0px",minHeight:"200px"}}>
                   <div className="row">
                        <div className="col-md-6">
                            <h3>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="text-theme">Doloribus, animi odit?</span> Aperiam, aliquam hic similique.
                            </h3>
                            <br/>
                            <small>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            </small>
                        </div>
                        <div className="col-md-6">
                            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                            <div>
                            <Select
                                showSearch
                                className="my-2"
                                autoFocus
                                style={{ width: "100%",minHeight:"150px" }}
                                placeholder="Select a person"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                            </div>
                            <div>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </div>
                            <div>   
                            <a href="begin-hosting" className="btn btn-block btn-lg btn-theme">Begin Hosting</a>
                            </div>
                        </div>
                    </div>     
                </div>
            </div>  
        </div>
        
    </div>
    <div className="navpadding mt-4"></div>
    <div className="container my-2">
        <div className="row">
            <div className="col-md-6">
                <h2>This is the Heading</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, maxime beatae blanditiis repudiandae quo id dignissimos non ad corporis fuga reprehenderit dolorem odio modi, quibusdam dolor eveniet deleniti commodi quam?</p>
            </div>
            <div className="col-md-6">
                <h2>This is the Heading</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, maxime beatae blanditiis repudiandae quo id dignissimos non ad corporis fuga reprehenderit dolorem odio modi, quibusdam dolor eveniet deleniti commodi quam?</p>
            </div>
        </div>
        <hr className="w-25 my-5"/>
        <div className="my-4">
            <h2 className="text-center mb-4">Hosting in 3 Steps</h2>
            <div className="row">
                <div className="col-md-4">
                    <FontAwesomeIcon icon={faCheckCircle} size="3x"></FontAwesomeIcon>
                    <h5>List your Space for free</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dicta deserunt numquam distinctio vero, repellendus laudantium doloremque quae ipsum in recusandae! Sequi ad repudiandae ipsam amet nesciunt nostrum natus molestias.</p>
                </div>
                <div className="col-md-4">
                    <FontAwesomeIcon icon={faCheckCircle} size="3x"></FontAwesomeIcon>
                    <h5>List your Space for free</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dicta deserunt numquam distinctio vero, repellendus laudantium doloremque quae ipsum in recusandae! Sequi ad repudiandae ipsam amet nesciunt nostrum natus molestias.</p>
                </div>
                <div className="col-md-4">
                    <FontAwesomeIcon icon={faCheckCircle} size="3x"></FontAwesomeIcon>
                    <h5>List your Space for free</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dicta deserunt numquam distinctio vero, repellendus laudantium doloremque quae ipsum in recusandae! Sequi ad repudiandae ipsam amet nesciunt nostrum natus molestias.</p>
                </div>
            </div>                     
        </div> 
        <hr className="w-25 my-5"/>
        <div className="mb-4">
            <div className="row">
                <div className="row">
                    <div className="col-md-6">
                        <FontAwesomeIcon icon={faQuoteLeft} size="3x" className="text-theme"></FontAwesomeIcon>
                        <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente obcaecati, quam non assumenda ducimus ullam quas quia aliquam, provident cupiditate mollitia maxime dolore corrupti, dolores dicta quo esse perspiciatis hic!</h4>
                        <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</small>
                        <div className="mt-5">
                        <a href="#" className="btn btn-sm btn-outline-dark">Learn More about Host Garuntee</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <img className="rounded shadow" src="https://a0.muscache.com/im/pictures/92acd468-73bf-4ca1-a956-277c4a94b3a3.jpg" style={{width:"100%"}} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h2 className="text-center mb-4">This is the heading</h2>
                    
                    <div className="row mb-4">
                    
                        <div className="col-md-6">
                            
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates eum dolorem aliquid ducimus alias blanditiis nihil. Voluptas ab, aliquid error beatae, excepturi reprehenderit tempore a molestiae optio corporis accusamus?<a href=""> Tips on being the best host</a> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, nisi! Voluptatibus, id. Ad praesentium modi rerum mollitia animi voluptatibus officiis vitae laboriosam. Tenetur reiciendis magni mollitia voluptatibus veritatis a vitae.</p>
                            
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod id quaerat optio eos adipisci. Doloribus, iure eaque aperiam magnam eligendi molestiae, eveniet voluptatibus cupiditate magni asperiores veniam, perferendis exercitationem. Veniam.</p>
                            <a href="#">How are you going to host?</a>
                        </div>
                        <div className="col-md-6">
                            
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates eum dolorem aliquid ducimus alias blanditiis nihil. Voluptas ab, aliquid error beatae, excepturi reprehenderit tempore a molestiae optio corporis accusamus?</p>
                        </div>
                    </div>
                    <img src="https://a0.muscache.com/im/pictures/17d27522-7f79-4a82-9225-74c737800641.jpg" style={{height:"400px",objectFit:"cover",objectPosition:"center center"}} className="w-100 shadow rounded" alt=""/>
                </div>
            </div>
        </div>                        
        <hr className="w-25 my-5"/>
        <div className="my-4">
            <h2 className="text-center mb-4">Payments Made Easy</h2>
            <div className="row">
                <div className="col-md-4">
                    <h5>List your Space for free</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dicta deserunt numquam distinctio vero, repellendus laudantium doloremque quae ipsum in recusandae! Sequi ad repudiandae ipsam amet nesciunt nostrum natus molestias.</p>
                </div>
                <div className="col-md-4">
                    <h5>List your Space for free</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dicta deserunt numquam distinctio vero, repellendus laudantium doloremque quae ipsum in recusandae! Sequi ad repudiandae ipsam amet nesciunt nostrum natus molestias.</p>
                </div>
                <div className="col-md-4">
                    <h5>List your Space for free</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dicta deserunt numquam distinctio vero, repellendus laudantium doloremque quae ipsum in recusandae! Sequi ad repudiandae ipsam amet nesciunt nostrum natus molestias.</p>
                </div>
            </div>                     
        </div> 
        <div className="mb-4">
            <div className="row">
                <div className="row">
                    
                    <div className="col-md-6">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <img className="rounded shadow" src="https://a0.muscache.com/im/pictures/92acd468-73bf-4ca1-a956-277c4a94b3a3.jpg" style={{width:"100%"}} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <FontAwesomeIcon icon={faQuoteLeft} size="3x" className="text-warning"></FontAwesomeIcon>
                        <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente obcaecati, quam non assumenda ducimus ullam quas quia aliquam, provident cupiditate mollitia maxime dolore corrupti, dolores dicta quo esse perspiciatis hic!</h4>
                        <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</small>
                        <div className="mt-5">
                        <a href="#" className="btn btn-sm btn-outline-dark">Learn More about Host Garuntee</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="w-100" style={{background:"url('https://a0.muscache.com/im/pictures/d04921d2-6064-440e-a18a-488406a2d3d4.jpg')",height:"400px",objectFit:"cover",objectPosition:"center center"}}>
        <div className="container">
            <div className="d-flex flex-row align-items-center w-100" style={{height:"400px"}}>
                <div>
                    <h1 className="text-light">Ready to host?</h1>
                    <a href="#" className="btn btn-outline-light">Get started now</a>
                </div>
            </div>
        </div>
    </div> 
    </Layout>
  )
}
export default hosts;
