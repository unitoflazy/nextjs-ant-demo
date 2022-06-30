import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Modal } from 'antd'
import React, { ReactNode, useState, useEffect } from 'react'

import './LoginForm.module.css'

type Props = {
  children?: ReactNode
  visible: boolean
  handleCancel: any
}

const LoginForm = ({ children, visible, handleCancel }: Props) => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }

  return (
    <Modal
      title="Login"
      visible={visible}
      //onOk={handleOk}
      // confirmLoading={confirmLoading}
      onCancel={handleCancel}
      okText={'Login'}
    >
      <Form
        name="normal_login"
        className="login-form"
        size="large"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please enter your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please enter your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          {'   '}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <a href="">Register!</a>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default LoginForm
