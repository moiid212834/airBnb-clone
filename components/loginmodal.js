import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import StandardForm from './form'
import PinForm from './pinform'
import { Steps, message } from 'antd';

const { Step } = Steps;
const steps = [
  {
    title: 'First',
    content: <StandardForm></StandardForm>,
  },
  {
    title: 'Second',
    content: <PinForm></PinForm>,
  },
];

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const  [phone,setPhone]=useState();
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Login"
      
      style={{zIndex:"999999999999",maxWidth:"370px"}}
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
      
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" id="loginnext"  className="d-none next" onClick={() => next()}>
            Next
          </Button>
        )}
       
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
         {current === steps.length - 1 && (
          <Button className="btn btn-theme px-5 mb-1" 
          onClick={() => {
          message.success('Processing complete!');
          location.href="/en/trips";
          }}>
            Done
          </Button>
        )}
      </div>
      
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
        Login
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
export default CollectionsPage