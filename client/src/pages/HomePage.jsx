import { Avatar, Flex, Spin, Typography } from "antd";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import Cards from "../components/Cards";
import TransactionForm from "../components/TransactionForm";

ChartJS.register(ArcElement, Tooltip, Legend);

const { Title } = Typography;

const HomePage = () => {
  const chartData = {
    labels: ["Saving", "Expense", "Investment"],
    datasets: [
      {
        label: "%",
        data: [13, 8, 3],
        backgroundColor: [
          "rgba(75, 192, 192)",
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
        ],
        borderColor: [
          "rgba(75, 192, 192)",
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
        borderRadius: 30,
        spacing: 10,
        cutout: 130,
      },
    ],
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };

  const loading = false;

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
