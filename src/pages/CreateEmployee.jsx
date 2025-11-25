import "./CreateEmployee.css";
import Header from "../components/createEmployee/Header";
import CreateEmployeeForm from "../components/createEmployeeForm/createEmployeeForm";
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
