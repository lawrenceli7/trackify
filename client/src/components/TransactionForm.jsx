import { useMutation } from "@apollo/client";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Flex,
  Form,
  Input,
  message,
  Row,
  Select,
  Spin,
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
import { IoMdAdd } from "react-icons/io";
import { MdRealEstateAgent, MdSavings } from "react-icons/md";
import { CREATE_TRANSACTION } from "../graphql/mutations/transaction.mutation";

const { Option } = Select;
const { Title, Text } = Typography;

const TransactionForm = () => {
  const [form] = Form.useForm();
  const [isLoading, setLoading] = useState(false);
  const [createTransaction, { loading }] = useMutation(CREATE_TRANSACTION, {
    refetchQueries: ["GetTransactions", "GetTransactionStatistics"],
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    const transactionData = {
      description: values.description,
      paymentType: values.paymentType,
      category: values.category,
      amount: parseFloat(values.amount),
      location: values.location,
      date: values.date.format("YYYY-MM-DD"),
    };

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await createTransaction({
        variables: {
          input: transactionData,
        },
      });
      form.resetFields();
      message.success("Transaction added successfully!");
    } catch (error) {
      console.error("GraphQL Error:", error.graphQLErrors);
      console.error("Network Error:", error.networkError);
      console.log("Error details:", error);
      message.error("Failed to create transaction");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex className="flex flex-col items-center justify-center shadow-md">
      <Card className="max-w-md bg-gray-100 rounded-lg lg:w-full sm:w-2/3 shadow-md shadow-[#1677ff]">
        <Title level={3} className="mb-4 text-center">
          Add Transaction
        </Title>
        <Divider />
        <Spin spinning={isLoading} tip="Loading">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
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
                    {
                      required: true,
                      message: "Please select a payment type!",
                    },
                  ]}
                >
                  <Select placeholder="Select Payment Type">
                    <Option value={"card"}>
                      <Flex className="flex items-center gap-2">
                        <FaCreditCard className="text-gray-400" />
                        <Text>Card</Text>
                      </Flex>
                    </Option>
                    <Option value={"cash"}>
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
                    <Option value={"saving"}>
                      <Flex className="flex items-center gap-2">
                        <MdSavings className="text-gray-400" />
                        <Text>Saving</Text>
                      </Flex>
                    </Option>
                    <Option value={"expense"}>
                      <Flex className="flex items-center gap-2">
                        <GiExpense className="text-gray-400" />
                        <Text>Expense</Text>
                      </Flex>
                    </Option>
                    <Option value={"investment"}>
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
                    placeholder="New York"
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
                icon={<IoMdAdd />}
                disabled={loading}
              >
                {loading ? "Loading..." : "Add Transaction"}
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </Card>
    </Flex>
  );
};

export default TransactionForm;
