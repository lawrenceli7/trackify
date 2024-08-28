import { Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Header = () => {
  return (
    <div className="mb-10">
      <Title
        className="relative z-50 pt-10 text-center"
        style={{ color: "white" }}
      >
        <Link to="/">Trackify</Link>
      </Title>
      <div className="relative hidden w-1/2 mx-auto mb-10 md:block">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute top-0 w-3/4 h-px inset-x-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute top-0 w-1/4 h-px inset-x-60 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
      </div>
    </div>
  );
};
export default Header;
