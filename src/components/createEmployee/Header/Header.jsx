import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="head">
        <h1>HRnet</h1>
      </div>
      <Link to="/employee-list">View Current Employees </Link>
      <h2>Create Employee</h2>
    </>
  );
};

export default Header;
