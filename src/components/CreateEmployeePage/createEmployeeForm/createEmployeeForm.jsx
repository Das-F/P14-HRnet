import "./createEmployeeForm.css";
import EmployeeIdentity from "../Identity/employeeIdentity";
import EmployeeAdress from "../Adress/employeeAdress";
import Department from "../Department/Department";

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
