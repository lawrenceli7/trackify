import { Typography } from "antd";
import Card from "./Card";

const { Title } = Typography;

const Cards = () => {
  return (
    <div className="w-full px-10 min-h-[0vh]">
      <Title
        className="my-10 text-center underline underline-offset-8"
        style={{ color: "white" }}
      >
        History
      </Title>
      <div className="grid justify-start w-full grid-cols-1 gap-4 mb-20 md:grid-cols-2 lg:grid-cols-3">
        <Card cardType={"saving"} />
        <Card cardType={"expense"} />
        <Card cardType={"investment"} />
        <Card cardType={"investment"} />
        <Card cardType={"saving"} />
        <Card cardType={"expense"} />
      </div>
    </div>
  );
};
export default Cards;
