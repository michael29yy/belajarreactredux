import { Form, Input, Select } from 'antd'
import React from 'react'

const HomeForm = () => {
    const [form] = Form.useForm();

    return (
        <Form
            layout='horizontal'
            form={form}
        >
            <Form.Item label="Input 1">
                <Select defaultValue={"Hello World"}> 
                    <Select.Option value="halo 1">Halo 1</Select.Option>
                    <Select.Option value="halo 2">Halo 2</Select.Option>
                    <Select.Option value="halo 3">Halo 3</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Input 2">
                <Input placeholder="input placeholder" />
            </Form.Item>
        </Form>
    )
}

export default HomeForm
