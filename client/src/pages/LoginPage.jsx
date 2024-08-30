import { useMutation } from "@apollo/client";
import { Button, Flex, Form, Input, Spin, Typography, message } from "antd";
import { useState } from "react";
import { FaSignInAlt, FaUserCircle, FaUserLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LOGIN } from "../graphql/mutations/user.mutation";

const { Title, Text } = Typography;

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [login, { loading }] = useMutation(LOGIN, {
    refetchQueries: ["GetAuthenticatedUser"],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await login({
        variables: {
          input: loginData,
        },
      });
      message.success("Login successful!");
    } catch (error) {
      console.log("Login failed! Please try again.", error);
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFail = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Please fill in all fields.");
  };

  return (
    <Flex className="flex items-center justify-center h-screen">
      <Flex className="z-50 flex overflow-hidden bg-gray-300 rounded-lg shadow-md shadow-[#1677ff]">
        <Flex className="flex items-center justify-center w-full bg-gray-100 min-w-80 sm:min-w-96">
          <div className="w-full max-w-md p-6">
            <Title level={2} className="text-center">
              Login <span className="text-[#1677ff]">Trackify</span>
            </Title>
            <Text type="secondary" className="block mb-6 text-center ">
              Welcome back! Log in to your account
            </Text>
            <Spin spinning={isLoading} tip="Loading">
              <Form
                layout="vertical"
                name="basic"
                onFinish={handleSubmit}
                onFinishFailed={handleFail}
                autoComplete="off"
                initialValues={loginData}
              >
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
                    value={loginData.username}
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
                    value={loginData.password}
                    onChange={handleChange}
                    placeholder="Enter your password..."
                    prefix={<FaUserLock className="mr-1" />}
                  />
                </Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full mt-1"
                  icon={<FaSignInAlt />}
                  loading={isLoading}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Login"}
                </Button>
              </Form>
            </Spin>
            <div className="mt-4 text-sm text-center">
              <Text>
                {"Don't"} have an account?{" "}
                <Link to="/signup" className="text-black hover:underline">
                  Sign Up
                </Link>
              </Text>
            </div>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default LoginPage;
