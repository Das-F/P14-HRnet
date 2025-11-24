import "./employeeAdress.css";
import Field from "../Field/field";

function EmployeeAddress({ street, city, state, zipCode }) {
  return (
    <div className="employee-address">
      <h2>Employee Address</h2>
      <Field label="Street">{street}</Field>
      <Field input="Street">{children}</Field>
      <Field label="City">{city}</Field>
      <Field input="City">{children}</Field>
      <Field label="State">{state}</Field>
      <Field label="Zip Code">{zipCode}</Field>
      <Field input="City">{children}</Field>
    </div>
  );
}
export default EmployeeAddress;
