import { Link } from "react-router";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Link to="login">Login </Link>
      <Link to="register">Register </Link>
    </div>
  );
};

export default Home;
