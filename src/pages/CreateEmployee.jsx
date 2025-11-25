import "./CreateEmployee.css";
import Header from "../components/createEmployee/Header/Header";
import CreateEmployeeForm from "../components/CreateEmployeePage/createEmployeeForm/createEmployeeForm";
import SaveButton from "../components/saveButton/saveButton";

const CreateEmployee = () => {
  return (
    <>
      <Header />
      <CreateEmployeeForm />
      <SaveButton />
    </>
  );
};

export default CreateEmployee;
