import "./employeeIdentity.css";
import Field from "../Field/field";

function EmployeeIdentity({ firstName, lastName, dateOfBirth, startDate }) {
  return (
    <div className="employee-identity">
      <h2>Employee Identity</h2>
      <Field label="First Name">{firstName}</Field>
      <Field input="First name">{children}</Field>
      <Field label="Last Name">{lastName}</Field>
      <Field input="Last name">{children}</Field>
      <Field label="Date of Birth">{dateOfBirth}</Field>
      <Field label="Start Date">{startDate}</Field>
    </div>
  );
}

export default EmployeeIdentity;
