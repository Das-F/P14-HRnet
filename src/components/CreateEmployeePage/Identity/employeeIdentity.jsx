import React, { useState } from "react";
import "./employeeIdentity.css";
import Field from "../Field/field";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EmployeeIdentity() {
  const today = new Date();
  const currentYear = today.getFullYear();

  // Birthdate min/max (100 ans → 18 ans)
  const minBirthYear = currentYear - 100;
  const maxBirthYear = currentYear - 18;
  const minBirthDate = new Date(minBirthYear, 0, 1);
  const maxBirthDate = new Date(maxBirthYear, 11, 31);

  // Start date min/max (± 30 ans)
  const minStartDate = new Date(currentYear - 30, today.getMonth(), today.getDate());
  const maxStartDate = new Date(currentYear + 30, today.getMonth(), today.getDate());

  const [birthDate, setBirthDate] = useState(null);
  const [startDate, setStartDate] = useState(null);

  return (
    <div className="employee-identity">
      <Field label="First Name">
        <input type="text" required placeholder="" onChange={(e) => console.log("First name :", e.target.value)} />
      </Field>

      <Field label="Last Name">
        <input type="text" required placeholder="" onChange={(e) => console.log("Last name :", e.target.value)} />
      </Field>

      {/* Birthdate Picker */}
      <Field label="Date of Birth">
        <DatePicker className="date-picker" required selected={birthDate} onChange={(date) => setBirthDate(date)} dateFormat="MM/dd/yyyy" placeholderText="" showYearDropdown scrollableYearDropdown minDate={minBirthDate} maxDate={maxBirthDate} openToDate={new Date(maxBirthYear - 10, 0, 1)} />
      </Field>

      {/* Start Date Picker */}
      <Field label="Start Date">
        <DatePicker className="date-picker" required selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="MM/dd/yyyy" placeholderText="" showYearDropdown scrollableYearDropdown minDate={minStartDate} maxDate={maxStartDate} openToDate={today} />
      </Field>
    </div>
  );
}

export default EmployeeIdentity;
