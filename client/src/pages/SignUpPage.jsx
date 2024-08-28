import { useMutation } from "@apollo/client";
import {
  Button,
  Flex,
  Form,
  Input,
  message,
  Radio,
  Spin,
  Typography,
} from "antd";
import { useState } from "react";
import {
  FaSignInAlt,
  FaUserCheck,
  FaUserCircle,
  FaUserLock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { SIGN_UP } from "../graphql/mutations/user.mutation";

const { Title, Text } = Typography;

const SignUpPage = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    username: "",
    password: "",
    gender: "",
  });
  const [isLoading, setLoading] = useState(false);

  const [signup, { loading, error }] = useMutation(SIGN_UP);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await signup({
        variables: {
          input: signUpData,
        },
      });
      message.success("Sign up successful!");
    } catch (error) {
      console.log(error);
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGenderChange = (e) => {
    setSignUpData((prevData) => ({
      ...prevData,
      gender: e.target.value,
    }));
  };

  const handleFail = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Flex className="flex items-center justify-center h-screen">
      <Flex className="z-50 flex overflow-hidden bg-gray-300 rounded-lg shadow-md shadow-[#1677ff]">
        <Flex className="flex items-center justify-center w-full bg-gray-100 min-w-80 sm:min-w-96 ">
          <div className="w-full max-w-md p-6 ">
            <Title level={2} className="text-center">
              Sign Up <span className="text-[#1677ff]">Trackify</span>
            </Title>
            <Text type="secondary" className="block mb-6 text-center">
              Join to keep track of your expenses
            </Text>
            <Spin spinning={isLoading} tip="Loading">
              <Form
                layout="vertical"
                name="basic"
                onFinish={handleSubmit}
                onFinishFailed={handleFail}
                autoComplete="off"
                initialValues={signUpData}
              >
                <Form.Item
                  label="Full Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your full name!" },
                  ]}
                  required
                  tooltip="This is a required field."
                >
                  <Input
                    name="name"
                    value={signUpData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name..."
                    prefix={<FaUserCheck className="mr-1" />}
                  />
                </Form.Item>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                  required
                  tooltip="This is a required field."
                >
                  <Input
                    name="username"
                    value={signUpData.username}
                    onChange={handleChange}
                    placeholder="Enter your username..."
                    prefix={<FaUserCircle className="mr-1" />}
                  />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please enter your password!" },
                  ]}
                  required
                  tooltip="This is a required field."
                >
                  <Input.Password
                    name="password"
                    type="password"
                    value={signUpData.password}
                    onChange={handleChange}
                    placeholder="Enter your password..."
                    prefix={<FaUserLock className="mr-1" />}
                  />
                </Form.Item>
                <Form.Item
                  label="Gender"
                  name="gender"
                  rules={[
                    { required: true, message: "Please select your gender!" },
                  ]}
                  required
                  tooltip="This is a required field."
                >
                  <Radio.Group
                    onChange={handleGenderChange}
                    value={signUpData.gender}
                  >
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full mt-2"
                    icon={<FaSignInAlt />}
                    loading={isLoading}
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Sign Up"}
                  </Button>
                </Form.Item>
              </Form>
            </Spin>
            <div className="mt-4 text-sm text-center">
              <Text>
                Already have an account?{" "}
                <Link to="/login" className="text-primary">
                  Login here
                </Link>
              </Text>
            </div>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignUpPage;
