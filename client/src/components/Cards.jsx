import { useQuery } from "@apollo/client";
import { Typography } from "antd";
import { GET_TRANSACTIONS } from "../graphql/queries/transaction.query";
import Card from "./Card";

const { Title, Text } = Typography;

const Cards = () => {
  const { data, loading } = useQuery(GET_TRANSACTIONS);

  return (
    <div className="w-full px-10 min-h-[0vh]">
      <Title
        className="my-10 text-center underline underline-offset-8"
        style={{ color: "white" }}
      >
        History
      </Title>
      <div className="grid justify-start w-full grid-cols-1 gap-4 mb-20 md:grid-cols-2 lg:grid-cols-3">
        {!loading &&
          data.transactions.map((transaction) => (
            <Card key={transaction._id} transaction={transaction} />
          ))}
      </div>
      {!loading && data?.transactions?.length === 0 && (
        <Text className="w-full text-center">
          No transaction history found.
        </Text>
      )}
    </div>
  );
};
export default Cards;
