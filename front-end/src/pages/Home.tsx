import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <Link to="/login" className="text-white">
        Login
      </Link>
      <Link to="/register" className="text-white">
        Register
      </Link>
    </div>
  );
};

export default Home;
