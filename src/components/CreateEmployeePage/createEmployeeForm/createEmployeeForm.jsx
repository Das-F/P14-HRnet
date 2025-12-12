import "./createEmployeeForm.css";
import EmployeeIdentity from "../Identity/employeeIdentity";
import EmployeeAdress from "../Adress/employeeAdress";
import Department from "../Department/Department";
import SaveButton from "../saveButton/saveButton";

const CreateEmployeeForm = () => {
  return (
    <>
      <form className="employee-form">
        <EmployeeIdentity />
        <EmployeeAdress />
        <Department />
        <SaveButton />
      </form>
    </>
  );
};

export default CreateEmployeeForm;
