import "./employeeAdress.css";
import Field from "../Field/field";

function EmployeeAddress({ street, city, state, zipCode }) {
  return (
    <div className="employee-address">
      <h2>Employee Address</h2>
      <Field label="Street">
        {street}
        <input type="text" placeholder="" />
      </Field>
      <Field label="City">
        {city}
        <input type="text" placeholder="" />
      </Field>
      <Field label="State">{state}</Field>
      <Field label="Zip Code">
        {zipCode}
        <input type="text" placeholder="" />
      </Field>
    </div>
  );
}

export default EmployeeAddress;
