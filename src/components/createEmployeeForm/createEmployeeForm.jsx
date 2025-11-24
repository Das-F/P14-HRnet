import "./createEmployeeForm.css";
import EmployeeIdentity from "../employeeIdentity/employeeIdentity";
import EmployeeAdress from "../employeeAdress/employeeAdress";
import Department from "../createEmployee/Department";

const CreateEmployeeForm = () => {
  return (
    <>
      <EmployeeIdentity />
      <EmployeeAdress />
      <Department />
    </>
  );
};

export default CreateEmployeeForm;
