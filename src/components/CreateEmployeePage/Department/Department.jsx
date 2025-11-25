import "./Department.css";
import departments from "../../constants/departments.js";
import Field from "../Field/field.jsx";

const Department = () => {
  return (
    <Field label="Department">
      <select name="department" id="department">
        {departments.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>
    </Field>
  );
};

export default Department;
