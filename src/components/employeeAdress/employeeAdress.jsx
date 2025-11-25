import "./employeeAdress.css";
import Field from "../Field/field";
import State from "../createEmployee/State";

function EmployeeAddress({ street, city, state, zipCode }) {
  return (
    <div className="employee-address">
      <fieldset>
        <legend>Adress</legend>
        <Field label="Street">
          {street}
          <input type="text" placeholder="" />
        </Field>
        <Field label="City">
          {city}
          <input type="text" placeholder="" />
        </Field>
        <Field label="State">{state}</Field>
        <State />
        <Field label="Zip Code">
          {zipCode}
          <input type="text" placeholder="" />
        </Field>
      </fieldset>
    </div>
  );
}

export default EmployeeAddress;
