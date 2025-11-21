import departments from "../constants/departments.js";

const Department = () => {
  return (
    <div>
      <h3>Department</h3>
      <select name="department" id="department">
        {departments.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Department;
