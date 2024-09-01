import { useMutation, useQuery } from "@apollo/client";
import { Avatar, Flex, Spin, Typography, message } from "antd";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import Cards from "../components/Cards";
import TransactionForm from "../components/TransactionForm";
import { LOGOUT } from "../graphql/mutations/user.mutation";
import { GET_TRANSACTION_STATISTICS } from "../graphql/queries/transaction.query";

ChartJS.register(ArcElement, Tooltip, Legend);

const { Title } = Typography;

const HomePage = () => {
  const { data } = useQuery(GET_TRANSACTION_STATISTICS);
  const [logout, { loading, client }] = useMutation(LOGOUT, {
    refetchQueries: ["GetAuthenticatedUser"],
  });

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "$",
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
        borderRadius: 30,
        spacing: 10,
        cutout: 130,
      },
    ],
  });

  useEffect(() => {
    if (data?.categoryStatistics) {
      const categories = data.categoryStatistics.map((stat) => stat.category);
      const totalAmounts = data.categoryStatistics.map(
        (stat) => stat.totalAmount
      );

      const backgroundColors = [];
      const borderColors = [];

      categories.forEach((category) => {
        if (category === "saving") {
          backgroundColors.push("rgba(75, 192, 192)");
          borderColors.push("rgba(75, 192, 192)");
        } else if (category === "expense") {
          backgroundColors.push("rgba(255, 99, 132)");
          borderColors.push("rgba(255, 99, 132)");
        } else if (category === "investment") {
          backgroundColors.push("rgba(54, 162, 235)");
          borderColors.push("rgba(54, 162, 235)");
        }
      });

      setChartData((prev) => ({
        labels: categories,
        datasets: [
          {
            ...prev.datasets[0],
            data: totalAmounts,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
          },
        ],
      }));
    }
  }, [data]);

  const handleLogout = async () => {
    try {
      await logout();
      message.success("Logged out successfully!");
      client.resetStore();
    } catch (error) {
      console.log("Log out", error);
      message.error(error.message);
    }
  };

  return (
    <Flex className="relative z-20 flex flex-col items-center justify-center gap-6 mx-auto max-w-7xl">
      <Flex className="flex items-center">
        <Title
          className="relative z-50 inline-block mb-4 mr-4 text-center"
          style={{ color: "white" }}
        >
          Spend wisely, track wisely
        </Title>
        <Avatar icon={<FaUser />} className="bg-[#bfbfbf]" />
        {!loading && (
          <MdLogout
            className="w-5 h-5 mx-2 cursor-pointer"
            onClick={handleLogout}
          />
        )}
        {loading && <Spin size="large" />}
      </Flex>
      <Flex className="flex flex-wrap items-center justify-center w-full gap-6">
        <div className="h-[330px] w-[330px] md:h-[360px] md:w-[360px]  ">
          <Doughnut data={chartData} />
        </div>
        <TransactionForm />
      </Flex>
      <Cards />
    </Flex>
  );
};
export default HomePage;
