import Header from "../components/createEmployee/Header";
import CreateEmployeeForm from "../components/createEmployeeForm/createEmployeeForm";
import Department from "../components/createEmployee/Department";

const CreateEmployee = () => {
  return (
    <>
      <Header />
      <CreateEmployeeForm />
      <Department />
    </>
  );
};

export default CreateEmployee;
