import { Avatar, Card, Flex, Typography } from "antd";
import { BsCardText } from "react-icons/bs";
import { FaTrash, FaUser } from "react-icons/fa";
import { FaLocationDot, FaSackDollar } from "react-icons/fa6";
import { HiPencilAlt } from "react-icons/hi";
import { MdOutlinePayments } from "react-icons/md";
import { Link } from "react-router-dom";

const { Text, Title } = Typography;

const categoryColorMap = {
  saving: "from-gray-700 to-gray-400",
  expense: "from-slate-800 to-slate-600",
  investment: "from-zinc-700 to-zinc-400",
};

// eslint-disable-next-line react/prop-types
const CardItem = ({ cardType }) => {
  const cardClass = categoryColorMap[cardType];

  return (
    <div className={`border rounded-md p-4 bg-gradient-to-br ${cardClass}`}>
      <Card className="bg-gray-400">
        <Flex className="flex flex-col gap-3">
          <Flex className="flex flex-row items-center justify-between">
            <Title level={2}>Saving</Title>
            <Flex className="flex items-center gap-2">
              <FaTrash className={"cursor-pointer"} />
              <Link to={`/transaction/123`}>
                <HiPencilAlt className="cursor-pointer" size={20} />
              </Link>
            </Flex>
          </Flex>
          <Text className="flex items-center gap-1 text-white">
            <BsCardText />
            Description: Salary
          </Text>
          <Text className="flex items-center gap-1 text-white">
            <MdOutlinePayments />
            Payment Type: Cash
          </Text>
          <Text className="flex items-center gap-1 text-white">
            <FaSackDollar />
            Amount: $150
          </Text>
          <Text className="flex items-center gap-1 text-white">
            <FaLocationDot />
            Location: New York
          </Text>
          <Flex className="flex items-center justify-between">
            <Text strong>21 Sep, 2001</Text>
            <Avatar className="w-8 h-8 border rounded-full" icon={<FaUser />} />
          </Flex>
        </Flex>
      </Card>
    </div>
  );
};
export default CardItem;
