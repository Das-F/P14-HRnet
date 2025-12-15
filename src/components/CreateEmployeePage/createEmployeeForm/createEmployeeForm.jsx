import React, { useState } from "react";
import "./createEmployeeForm.css";
import EmployeeIdentity from "../Identity/employeeIdentity";
import EmployeeAdress from "../Adress/employeeAdress";
import Department from "../Department/Department";
import SaveButton from "../saveButton/saveButton";
import CreationPopUp from "../CreationPopUp/CreationPopUp";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../../store/employeesSlice";

const CreateEmployeeForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    // Dispatch to Redux store
    try {
      dispatch(addEmployee(data));
    } catch (err) {
      console.error("Failed to dispatch employee:", err);
    }

    setIsOpen(true);
    form.reset();
  };

  return (
    <>
      <form className="employee-form" onSubmit={handleSubmit}>
        <EmployeeIdentity />
        <EmployeeAdress />
        <Department />
        <SaveButton />
      </form>

      <CreationPopUp isOpen={isOpen} onClose={() => setIsOpen(false)} title={"Employee Created"} message={""} />
    </>
  );
};

export default CreateEmployeeForm;
