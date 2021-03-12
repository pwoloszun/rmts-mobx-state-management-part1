import React from 'react';
import { Form, Input, Button } from 'antd';

import { useRealEstatesContainer } from './FetchRealEstatesWrapper';
import { RealEstateParams } from './types/real-estate';
import { createRealEstate } from './api/real-estates-api';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


export default function RealEstateForm(): React.ReactElement {
  const { addOne } = useRealEstatesContainer();

  const onFinish = (values: RealEstateParams) => {
    console.log('Success:', values);
    createRealEstate(values).then((realEstate) => addOne(realEstate));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: 'Please input Price' }]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        label="Street"
        name="street"
        rules={[{ required: true, message: 'Please input Street' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Built on"
        name="builtAt"
        rules={[{ required: true, message: 'Please input Built date' }]}
      >
        <Input type="date" />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
