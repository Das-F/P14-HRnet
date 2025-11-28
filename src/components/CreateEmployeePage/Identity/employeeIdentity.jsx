import React, { useState } from "react";
import "./employeeIdentity.css";
import Field from "../Field/field";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EmployeeIdentity() {
  const [birthDate, setBirthDate] = useState(null);
  const [startDate, setStartDate] = useState(null);

  return (
    <div className="employee-identity">
      <Field label="First Name">
        <input type="text" placeholder="" onChange={(e) => console.log("First name :", e.target.value)} />
      </Field>

      <Field label="Last Name">
        <input type="text" placeholder="" onChange={(e) => console.log("Last name :", e.target.value)} />
      </Field>

      <Field label="Date of Birth">
        <DatePicker className="date-picker" selected={birthDate} onChange={(date) => setBirthDate(date)} dateFormat="dd/MM/yyyy" placeholderText="" showYearDropdown scrollableYearDropdown minDate={new Date(1925, 0, 1)} maxDate={new Date()} yearDropdownItemNumber={100} openToDate={new Date(1980, 0, 1)} />
      </Field>

      <Field label="Start Date">
        <DatePicker className="date-picker" selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" placeholderText="" showYearDropdown scrollableYearDropdown yearDropdownItemNumber={30} />
      </Field>
    </div>
  );
}

export default EmployeeIdentity;
