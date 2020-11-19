import { Form, Input, InputNumber, Button, DatePicker, Checkbox } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const RegisterForm = () => {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      < Form.Item className="w-100 my-0" name={['user', 'name']} rules={[{ required: true }]}>
        <Input placeholder="First Name" className="w-100" />
      </Form.Item>
      < Form.Item className="w-100 my-0" name={['user', 'email']} rules={[{ type: 'email' }]}>
        <Input placeholder="LastName" className="w-100"/>
      </Form.Item>
      <div className="mb-4">
      <small className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</small>
      </div>
      < Form.Item className="w-100 my-0" name={['user', 'age']} rules={[{ type: 'number', min: 0, max: 99 }]}>
        <DatePicker placeholder="Your Birthday"></DatePicker>
      </Form.Item>
      <div className="mb-4">
      <small className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</small>
      </div>
      < Form.Item className="w-100 my-0" name={['user', 'website']} >
        <Input placeholder="Email" className="w-100"/>
      </Form.Item>
      <div className="mb-4">
      <small className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</small>
      </div>
      < Form.Item className="w-100 my-0" name={['user', 'introduction']}>
        <Input.Password placeholder="Password" />
      </Form.Item>
      <div className="mb-4">
      <small className="mb-4">If you decide to Agree and Continue lorem ipsum dolor, sit amet consectetur adipisicing elit. <a href="">Term and privacy</a>Lorem ipsum dolor sit amet consectetur adipisicing <a href="#">Terms of service</a></small>
      </div>
      <button className="btn btn-theme btn-block btn-lg mb-4">Agree and Continue</button>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sequi vero ex.</small></Checkbox>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;