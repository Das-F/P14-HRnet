import "./employeeAdress.css";
import Field from "../Field/field";
import State from "../createEmployee/State";

function EmployeeAddress() {
  return (
    <div className="employee-address">
      <fieldset>
        <legend>Adress</legend>
        <Field label="Street">
          <input type="text" placeholder="" />
        </Field>
        <Field label="City">
          <input type="text" placeholder="" />
        </Field>
        <Field label="State">
          <State />
        </Field>
        <Field label="Zip Code">
          <input type="text" placeholder="" />
        </Field>
      </fieldset>
    </div>
  );
}

export default EmployeeAddress;
