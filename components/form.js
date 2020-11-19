
import React from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faEnvelope, faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";


const StandardForm =()=>{
    const [form] = Form.useForm();
    
    return (
        <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="phone"
          label="Phone"
          rules={[
            {
              required: true,
              message: 'Please enter valid phone number',
            },
          ]}
          className="my-0 w-100"
          
        >
        <PhoneInput
        country={'us'}
        clasName="w-100"
        style={{width:"100%"}}
        />
        <small><b>We'll call or text to confirm that its you, standard rates and taxes will apply</b></small> 
        </Form.Item>
        <div onClick={()=> document.getElementsByClassName('next')[0].click()} className="btn btn-theme btn-lg- btn-block mt-3">Continue</div>
        <hr/>
        <div className="btn btn-sm btn-block btn-outline-dark"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Continue with Email</div>
        <div className="btn btn-sm btn-block btn-outline-dark"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> Continue with Facebook</div>
        <div className="btn btn-sm btn-block btn-outline-dark">Continue with Google</div>
        <div className="btn btn-sm btn-block btn-outline-dark"><FontAwesomeIcon icon={faAppleAlt} ></FontAwesomeIcon> Continue with Apple</div>
        <br/>
        <div>New to clone? <a href="#" className="text-theme">Register Now</a></div>
      </Form>
   
    );
  }

export default StandardForm;