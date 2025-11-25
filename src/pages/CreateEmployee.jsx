import "./CreateEmployee.css";
import Header from "../components/CreateEmployeePage/Header/Header";
import CreateEmployeeForm from "../components/CreateEmployeePage/createEmployeeForm/createEmployeeForm";
import SaveButton from "../components/CreateEmployeePage/saveButton/saveButton";

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
