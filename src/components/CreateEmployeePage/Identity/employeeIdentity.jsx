import "./employeeIdentity.css";
import Field from "../CreateEmployeePage/Field/field";

function EmployeeIdentity({ dateOfBirth, startDate }) {
  return (
    <div className="employee-identity">
      <Field label="First Name">
        <input type="text" placeholder="" />
      </Field>
      <Field label="Last Name">
        <input type="text" placeholder="" />
      </Field>
      <Field label="Date of Birth">{dateOfBirth}</Field>
      <Field label="Start Date">{startDate}</Field>
    </div>
  );
}

export default EmployeeIdentity;
