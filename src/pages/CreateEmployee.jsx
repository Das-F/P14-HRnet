import Header from "../components/createEmployee/Header";
import CreateEmployeeForm from "../components/createEmployeeForm/createEmployeeForm";
import Department from "../components/createEmployee/Department";
import SaveButton from "../components/saveButton/saveButton";

const CreateEmployee = () => {
  return (
    <>
      <Header />
      <CreateEmployeeForm />
      <Department />
      <SaveButton />
    </>
  );
};

export default CreateEmployee;
