import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./employeeList.css";

const employeeList = () => {
  const [data, setData] = useState([]);
  const employeesFromStore = useSelector((state) => state.employees.list);

  // Sync local data copy with store (keeps sorting/search/pagination local)
  useEffect(() => {
    if (Array.isArray(employeesFromStore)) setData(employeesFromStore.slice());
  }, [employeesFromStore]);

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: null,
  });

  // Search term for filtering rows
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Pagination
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Sorting function
  const sortColumn = (key) => {
    let direction = "asc";

    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      const A = a[key].toString().toLowerCase();
      const B = b[key].toString().toLowerCase();

      const isNumber = !isNaN(A) && !isNaN(B);

      if (isNumber) {
        return direction === "asc" ? A - B : B - A;
      }

      return direction === "asc" ? A.localeCompare(B) : B.localeCompare(A);
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  // To know which column is sorted and how
  const getSortOrder = (key) => {
    if (sortConfig.key !== key) return "";
    return sortConfig.direction;
  };

  // Filtered data according to search term (search across all fields)
  const filteredData = data.filter((employee) => {
    if (!searchTerm) return true;
    const term = searchTerm.toString().toLowerCase();
    return Object.values(employee).some((value) => value?.toString().toLowerCase().includes(term));
  });

  // Ensure currentPage is valid when filteredData or pageSize changes
  useEffect(() => {
    const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize));
    if (currentPage > totalPages) setCurrentPage(totalPages);
    if (currentPage < 1) setCurrentPage(1);
  }, [filteredData.length, pageSize]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredData.length);
  const displayedData = filteredData.slice(startIndex, endIndex);
  const showingStart = filteredData.length === 0 ? 0 : startIndex + 1;
  const showingEnd = startIndex + displayedData.length;

  return (
    <div className="employee-list-array">
      <div className="array-filters">
        <div className="array-length">
          <h4> Show</h4>
          <div className="select-wrapper">
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
          <h4> entries</h4>
        </div>
        <div className="array-search">
          <h4> Search:</h4>
          <input type="text" placeholder="" value={searchTerm} onChange={handleSearch} />
        </div>
      </div>

      <table className="employee-list-table">
        <thead>
          <tr>
            <th onClick={() => sortColumn("firstName")} data-order={getSortOrder("firstName")}>
              First Name <span className="sort-icon"></span>
            </th>

            <th onClick={() => sortColumn("lastName")} data-order={getSortOrder("lastName")}>
              Last Name <span className="sort-icon"></span>
            </th>

            <th onClick={() => sortColumn("startDate")} data-order={getSortOrder("startDate")}>
              Start Date <span className="sort-icon"></span>
            </th>

            <th onClick={() => sortColumn("department")} data-order={getSortOrder("department")}>
              Department <span className="sort-icon"></span>
            </th>

            <th onClick={() => sortColumn("dateOfBirth")} data-order={getSortOrder("dateOfBirth")}>
              Date of Birth <span className="sort-icon"></span>
            </th>

            <th onClick={() => sortColumn("street")} data-order={getSortOrder("street")}>
              Street <span className="sort-icon"></span>
            </th>

            <th onClick={() => sortColumn("city")} data-order={getSortOrder("city")}>
              City <span className="sort-icon"></span>
            </th>

            <th onClick={() => sortColumn("state")} data-order={getSortOrder("state")}>
              State <span className="sort-icon"></span>
            </th>

            <th onClick={() => sortColumn("zipCode")} data-order={getSortOrder("zipCode")}>
              Zip Code <span className="sort-icon"></span>
            </th>
          </tr>
        </thead>

        <tbody>
          {displayedData.map((employee, i) => (
            <tr key={startIndex + i}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.startDate}</td>
              <td>{employee.department}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="array-pagination">
        <div className="pagination-info">
          <span>
            Showing {showingStart} to {showingEnd} of {filteredData.length} entries
          </span>
        </div>
        <div className="pagination-buttons">
          <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1}>
            {"Previous"}
          </button>
          <button className="active">{currentPage}</button>
          <button onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>
            {"Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default employeeList;
