import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>HRnet</h1>
      <Link to="/employee-list">View Current Employees </Link>
      <h2>Create Employee</h2>
    </>
  );
};

export default Header;
