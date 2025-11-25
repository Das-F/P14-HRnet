import "./createEmployeeForm.css";
import EmployeeIdentity from "../employeeIdentity/employeeIdentity";
import EmployeeAdress from "../employeeAdress/employeeAdress";
import Department from "../createEmployee/Department/Department";

const CreateEmployeeForm = () => {
  return (
    <>
      <div className="employee-form">
        <EmployeeIdentity />
        <EmployeeAdress />
        <Department />
      </div>
    </>
  );
};

export default CreateEmployeeForm;
