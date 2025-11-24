import "./createEmployeeForm.css";
import EmployeeIdentity from "../employeeIdentity/employeeIdentity";
import EmployeeAddress from "../employeeAddress/employeeAddress";
import Department from "../createEmployee/Department";

const CreateEmployeeForm = () => {
  return (
    <>
      <EmployeeIdentity />
      <EmployeeAddress />
      <Department />
    </>
  );
};

export default CreateEmployeeForm;
