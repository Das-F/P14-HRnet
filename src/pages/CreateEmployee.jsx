import "./CreateEmployee.css";
import { useState } from "react";
import Header from "../components/CreateEmployeePage/Header/Header";
import CreateEmployeeForm from "../components/CreateEmployeePage/createEmployeeForm/createEmployeeForm";
import SaveButton from "../components/CreateEmployeePage/saveButton/saveButton";
import CreationPopUp from "../components/CreateEmployeePage/CreationPopUp/CreationPop-up";

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
      <SaveButton onSave={handleClick} />
      {showPopup && <CreationPopUp onClose={handleClose} />}
    </>
  );
};

export default CreateEmployee;
