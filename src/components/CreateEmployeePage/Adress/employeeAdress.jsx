import "./employeeAdress.css";
import Field from "../Field/field";
import State from "../State";

function EmployeeAddress() {
  return (
    <div className="employee-address">
      <fieldset>
        <legend>Adress</legend>
        <Field label="Street">
          <input name="street" type="text" required placeholder="" />
        </Field>
        <Field label="City">
          <input name="city" type="text" required placeholder="" />
        </Field>
        <Field label="State">
          <State />
        </Field>
        <Field label="Zip Code">
          <input name="zipCode" type="text" required placeholder="" />
        </Field>
      </fieldset>
    </div>
  );
}

export default EmployeeAddress;
