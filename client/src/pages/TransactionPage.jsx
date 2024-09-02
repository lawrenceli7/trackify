import { useMutation, useQuery } from "@apollo/client";
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
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import TransactionFormSkeleton from "../components/skeletons/TransactionFormSkeleton";
import { UPDATE_TRANSACTION } from "../graphql/mutations/transaction.mutation";
import { GET_TRANSACTION } from "../graphql/queries/transaction.query";

dayjs.extend(utc);

const { Option } = Select;
const { Title, Text } = Typography;

const TransactionPage = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [isLoading, setLoading] = useState(false);

  const { loading, data } = useQuery(GET_TRANSACTION, {
    variables: { id: id },
  });

  const [updateTransaction, { loading: loadingUpdate }] = useMutation(
    UPDATE_TRANSACTION,
    {
      refetchQueries: [{ query: "GetTransactionStatistics" }],
    }
  );

  const [formData, setFormData] = useState({
    description: data?.transaction?.description || "",
    paymentType: data?.transaction?.paymentType || "",
    category: data?.transaction?.category || "",
    amount: data?.transaction?.amount || "",
    location: data?.transaction?.location || "",
    date: data?.transaction?.date || "",
  });

  const handleSubmit = async () => {
    const amount = parseFloat(formData.amount);
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await updateTransaction({
        variables: {
          input: {
            ...formData,
            amount,
            transactionId: id,
          },
        },
      });
      message.success("Transaction updated successfully!");
    } catch (error) {
      console.error(error.message);
      message.error("Fail to update transaction");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value, name) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: date ? dayjs(date).startOf("day").format("YYYY-MM-DD") : "",
    }));
  };

  useEffect(() => {
    if (data) {
      setFormData({
        description: data?.transaction?.description,
        paymentType: data?.transaction?.paymentType,
        category: data?.transaction?.category,
        amount: data?.transaction?.amount,
        location: data?.transaction?.location,
        date: data.transaction.date
          ? dayjs.utc(+data.transaction.date).format("YYYY-MM-DD")
          : "",
      });
    }
  }, [data]);

  if (loading) return <TransactionFormSkeleton />;

  return (
    <Flex className="flex flex-col items-center justify-center min-h-screen">
      <Card className="max-w-lg bg-gray-100  lg:w-full sm:w-2/3 shadow-md shadow-[#1677ff]">
        <Title level={2} className="text-center">
          Update this Transaction
        </Title>
        <Divider />
        <Spin spinning={isLoading} tip="Loading">
          <Form
            name="basic"
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            autoComplete="off"
          >
            <Form.Item
              label="Transaction"
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
                value={formData.description}
                onChange={handleInputChange}
                name="description"
              />
            </Form.Item>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  label="Payment Type"
                  rules={[
                    {
                      required: true,
                      message: "Please select a payment type!",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select Payment Type"
                    value={formData.paymentType}
                    onChange={(value) =>
                      handleSelectChange(value, "paymentType")
                    }
                    name="paymentType"
                  >
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
                  rules={[
                    { required: true, message: "Please select a category!" },
                  ]}
                >
                  <Select
                    placeholder="Select Category"
                    value={formData.category}
                    onChange={(value) => handleSelectChange(value, "category")}
                    name="category"
                  >
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
                  rules={[
                    { required: true, message: "Please enter the amount!" },
                  ]}
                >
                  <Input
                    type="number"
                    placeholder="100"
                    prefix={<FaCashRegister className="text-gray-400" />}
                    value={formData.amount}
                    onChange={handleInputChange}
                    name="amount"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Location"
                  rules={[
                    { required: true, message: "Please enter the location!" },
                  ]}
                >
                  <Input
                    placeholder="Enter location..."
                    prefix={<FaMapMarkerAlt className="text-gray-400" />}
                    value={formData.location}
                    onChange={handleInputChange}
                    name="location"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Date"
                  rules={[{ required: true, message: "Please select a date!" }]}
                >
                  <DatePicker
                    className="w-full"
                    placeholder="Select date..."
                    suffixIcon={<FaCalendarAlt className="text-gray-400" />}
                    value={formData.date ? dayjs(formData.date) : null}
                    onChange={handleDateChange}
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
                disabled={loadingUpdate}
              >
                {loadingUpdate ? "Updating..." : "Update Transaction"}
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </Card>
    </Flex>
  );
};

export default TransactionPage;
