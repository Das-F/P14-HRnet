import "./employeeIdentity.css";
import Field from "../Field/field";

function EmployeeIdentity({ dateOfBirth, startDate }) {
  return (
    <div className="employee-identity">
      <Field label="First Name">
        <input type="text" placeholder="" onChange={(e) => console.log("First name :" + e.target.value)} />
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
