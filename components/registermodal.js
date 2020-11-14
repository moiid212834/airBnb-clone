import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faEnvelope, faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const  [phone,setPhone]=useState();
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Register"
      
      style={{zIndex:"999999999999",maxWidth:"450px"}}
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
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
        <a href="" className="btn btn-theme btn-lg- btn-block mt-3">Continue</a>
        <hr/>
        <div className="btn btn-sm btn-block btn-outline-dark"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Continue with Email</div>
        <div className="btn btn-sm btn-block btn-outline-dark"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> Continue with Facebook</div>
        <div className="btn btn-sm btn-block btn-outline-dark">Continue with Google</div>
        <div className="btn btn-sm btn-block btn-outline-dark"><FontAwesomeIcon icon={faAppleAlt} ></FontAwesomeIcon> Continue with Apple</div>
        <br/>
        <div>Already Have an Account? <a href="#" className="text-theme">Login Now</a></div>
      </Form>
    </Modal>
  );
};

const CollectionsPage = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  return (
    <div>
      <a
        onClick={() => {
          setVisible(true);
        }}
      >
        Register
      </a>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};
export default CollectionsPage;