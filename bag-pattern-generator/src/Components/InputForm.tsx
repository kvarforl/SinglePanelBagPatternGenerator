import { Form, InputNumber } from "antd"

export const InputForm = () => {
    return <Form>
        <Form.Item label={"Seam Allowance"}>
            <InputNumber/>
        </Form.Item>
        <Form.Item label={"Bag Length"}>
            <InputNumber/>
        </Form.Item>
        <Form.Item label={"Bag Width"}>
            <InputNumber/>
        </Form.Item>
        <Form.Item label={"Bag Height"}>
            <InputNumber/>
        </Form.Item>
    </Form>
}