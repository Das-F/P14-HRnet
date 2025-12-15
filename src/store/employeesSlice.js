import { createSlice } from "@reduxjs/toolkit";

const sampleData = [
  {
    firstName: "John",
    lastName: "Doe",
    startDate: "2022-01-01",
    department: "Sales",
    dateOfBirth: "1990-01-01",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    startDate: "2021-03-15",
    department: "HR",
    dateOfBirth: "1985-05-20",
    street: "47 Elm St",
    city: "Boston",
    state: "MA",
    zipCode: "02110",
  },
];

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    // start with sample data; removed localStorage dependency
    list: sampleData,
  },
  reducers: {
    addEmployee(state, action) {
      state.list.push(action.payload);
    },
    setEmployees(state, action) {
      state.list = action.payload;
    },
    clearEmployees(state) {
      state.list = [];
    },
  },
});

export const { addEmployee, setEmployees, clearEmployees } = employeesSlice.actions;
export default employeesSlice.reducer;
