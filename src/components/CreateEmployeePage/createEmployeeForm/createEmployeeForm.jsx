import React, { useState } from "react";
import "./createEmployeeForm.css";
import EmployeeIdentity from "../Identity/employeeIdentity";
import EmployeeAdress from "../Adress/employeeAdress";
import Department from "../Department/Department";
import SaveButton from "../saveButton/saveButton";
import CreationPopUp from "../CreationPopUp/CreationPopUp";

const CreateEmployeeForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    // Save to localStorage (append to existing array)
    try {
      const stored = JSON.parse(localStorage.getItem("employees") || "[]");
      const employees = Array.isArray(stored) ? stored : [];
      employees.push(data);
      localStorage.setItem("employees", JSON.stringify(employees));
      // Notify other components in the same window
      window.dispatchEvent(new CustomEvent("employeesUpdated", { detail: { employees } }));
    } catch (err) {
      console.error("Failed to save employee:", err);
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
