import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full px-10 min-h-[0vh]">
      <p className="my-10 text-5xl font-bold text-center">History</p>
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
