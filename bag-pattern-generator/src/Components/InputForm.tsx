import { Form, InputNumber } from "antd"

interface InputValues {
    seamAllowance: number,
    length: number,
    width: number,
    height: number
}

const calculateQuarterDimensions = (inputs: InputValues) => {
    const quarterHeight = inputs.height + inputs.seamAllowance + (.5 * inputs.width)
    const quarterWidth = (.5 * inputs.length) + inputs.seamAllowance + (.5 * inputs.width) + inputs.seamAllowance
}

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