import "./CreateEmployee.css";
import Header from "../components/CreateEmployeePage/Header/Header";
import CreateEmployeeForm from "../components/CreateEmployeePage/createEmployeeForm/createEmployeeForm";
import SaveButton from "../components/CreateEmployeePage/saveButton/saveButton";

const CreateEmployee = () => {
  const handleClick = () => {
    console.log("Save button clicked");
  };
  return (
    <>
      <Header />
      <CreateEmployeeForm />
      <SaveButton onSave={handleClick} />
    </>
  );
};

export default CreateEmployee;
