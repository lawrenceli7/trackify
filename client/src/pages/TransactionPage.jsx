import {
  Button,
  Card,
  DatePicker,
  Flex,
  Form,
  Input,
  Select,
  Typography,
} from "antd";
import { useState } from "react";

const { Option } = Select;
const { Title } = Typography;

const TransactionPage = () => {
  const [formData, setFormData] = useState({
    description: "",
    paymentType: "",
    category: "",
    amount: "",
    location: "",
    date: "",
  });

  const handleSubmit = async (values) => {
    console.log("formData", values);
    setFormData(values);
  };

  return (
    <Flex className="flex flex-col items-center justify-center min-h-screen">
      <Card className="max-w-lg bg-gray-100 shadow-lg lg:w-full sm:w-2/3">
        <Title level={2} className="text-center">
          Update this Transaction
        </Title>
        <Form
          name="basic"
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={formData}
          autoComplete="off"
        >
          <Form.Item
            label="Transaction"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input the transaction description!",
              },
            ]}
          >
            <Input placeholder="Rent, Groceries, Salary, etc." />
          </Form.Item>
          <Form.Item
            label="Payment Type"
            name="paymentType"
            rules={[
              { required: true, message: "Please select a payment type!" },
            ]}
          >
            <Select placeholder="Select Payment Type">
              <Option value="card">Card</Option>
              <Option value="cash">Cash</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: "Please select a category!" }]}
          >
            <Select placeholder="Select Category">
              <Option value="saving">Saving</Option>
              <Option value="expense">Expense</Option>
              <Option value="investment">Investment</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Amount ($)"
            name="amount"
            rules={[{ required: true, message: "Please enter the amount!" }]}
          >
            <Input type="number" placeholder="100" />
          </Form.Item>
          <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true, message: "Please enter the location!" }]}
          >
            <Input placeholder="Enter location..." />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please select a date!" }]}
          >
            <DatePicker className="w-full" placeholder="Select date..." />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Update Transaction
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
};

export default TransactionPage;
