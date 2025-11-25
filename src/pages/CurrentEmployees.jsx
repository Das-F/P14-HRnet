import "./CurrentEmployees.css";
import { Link } from "react-router-dom";

const CurrentEmployees = () => {
  return (
    <>
      <div>
        <div className="head-title">
          <h1>HRnet</h1>
        </div>
        <h1>Current Employees</h1>
      </div>
      <Link to="/" className="create-employee-link">
        Home{" "}
      </Link>
    </>
  );
};

export default CurrentEmployees;
