import "./CreateEmployee.css";
import { useState } from "react";
import Header from "../components/CreateEmployeePage/Header/Header";
import CreateEmployeeForm from "../components/CreateEmployeePage/createEmployeeForm/createEmployeeForm";
import ModalPopUp from "../components/CreateEmployeePage/CreationPopUp/CreationPopUp";

const CreateEmployee = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    // Affiche la modale de confirmation
    setShowPopup(true);
  };

  const handleClose = () => setShowPopup(false);

  return (
    <>
      <Header />
      <CreateEmployeeForm />
      <ModalPopUp isOpen={showPopup} onClose={handleClose} message="Employee Created !" />
    </>
  );
};

export default CreateEmployee;
