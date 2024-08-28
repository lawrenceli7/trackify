import {
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Flex,
  Form,
  Input,
  Row,
  Select,
  Typography,
} from "antd";
import { useState } from "react";
import {
  FaCalendarAlt,
  FaCashRegister,
  FaCreditCard,
  FaMapMarkerAlt,
  FaMoneyBill,
  FaMoneyBillWave,
} from "react-icons/fa";
import { GiExpense } from "react-icons/gi";
import { GrUpdate } from "react-icons/gr";
import { MdRealEstateAgent, MdSavings } from "react-icons/md";

const { Option } = Select;
const { Title, Text } = Typography;

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
      <Card className="max-w-lg bg-gray-100  lg:w-full sm:w-2/3 shadow-md shadow-[#1677ff]">
        <Title level={2} className="text-center">
          Update this Transaction
        </Title>
        <Divider />
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
            <Input
              placeholder="Rent, Groceries, Salary, etc."
              prefix={<FaMoneyBillWave className="text-gray-400" />}
            />
          </Form.Item>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                label="Payment Type"
                name="paymentType"
                rules={[
                  { required: true, message: "Please select a payment type!" },
                ]}
              >
                <Select placeholder="Select Payment Type">
                  <Option value="card">
                    <Flex className="flex items-center gap-2">
                      <FaCreditCard className="text-gray-400" />
                      <Text>Card</Text>
                    </Flex>
                  </Option>
                  <Option value="cash">
                    <Flex className="flex items-center gap-2">
                      <FaMoneyBill className="text-gray-400" />
                      <Text>Cash</Text>
                    </Flex>
                  </Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Category"
                name="category"
                rules={[
                  { required: true, message: "Please select a category!" },
                ]}
              >
                <Select placeholder="Select Category">
                  <Option value="saving">
                    <Flex className="flex items-center gap-2">
                      <MdSavings className="text-gray-400" />
                      <Text>Saving</Text>
                    </Flex>
                  </Option>
                  <Option value="expense">
                    <Flex className="flex items-center gap-2">
                      <GiExpense className="text-gray-400" />
                      <Text>Expense</Text>
                    </Flex>
                  </Option>
                  <Option value="investment">
                    <Flex className="flex items-center gap-2">
                      <MdRealEstateAgent className="text-gray-400" />
                      <Text>Investment</Text>
                    </Flex>
                  </Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Amount ($)"
                name="amount"
                rules={[
                  { required: true, message: "Please enter the amount!" },
                ]}
              >
                <Input
                  type="number"
                  placeholder="100"
                  prefix={<FaCashRegister className="text-gray-400" />}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Location"
                name="location"
                rules={[
                  { required: true, message: "Please enter the location!" },
                ]}
              >
                <Input
                  placeholder="Enter location..."
                  prefix={<FaMapMarkerAlt className="text-gray-400" />}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Date"
                name="date"
                rules={[{ required: true, message: "Please select a date!" }]}
              >
                <DatePicker
                  className="w-full"
                  placeholder="Select date..."
                  suffixIcon={<FaCalendarAlt className="text-gray-400" />}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              icon={<GrUpdate />}
            >
              Update Transaction
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
};

export default TransactionPage;
