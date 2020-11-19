import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import StandardForm from './form'
import RegisterForm from './registerform'
import { Steps, message } from 'antd';

const { Step } = Steps;
const steps = [
  {
    title: 'First',
    content: <StandardForm></StandardForm>,
  },
  {
    title: 'Second',
    content: <RegisterForm></RegisterForm>,
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
      title="Register"
      
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
          <Button type="primary" id="rnext"  className="d-none next" onClick={() => next()}>
            Next
          </Button>
        )}
       
        {current > 0 && (
          <Button style={{ margin: '8px 0px' }} onClick={() => prev()}>
            Previous
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