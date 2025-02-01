import Dexie from "dexie";
import * as moment from "moment";

export const db = new Dexie("employeeDB");
db.version(1).stores({
  employees: "++id, name, designation, startDate, endDate", // Primary key and indexed props
});

export const getCurrentEmployees = () => {
  return db.employees
    .filter(
      (employee) =>
        employee.endDate === "" ||
        moment(employee.endDate).isSameOrAfter(moment().subtract(1, "day"))
    )
    .toArray();
};

export const getPreviousEmployees = () => {
  return db.employees
    .filter(
      (employee) =>
        employee.endDate !== "" &&
        moment(employee.endDate).isSameOrBefore(moment().subtract(1, "day"))
    )
    .toArray();
};

export const getEmployeeCount = () => {
  return db.employees.count();
};

export const getCurrentEmployeeCount = () => {
  return db.employees
    .filter(
      (employee) =>
        employee.endDate === "" ||
        moment(employee.endDate).isSameOrAfter(moment().subtract(1, "day"))
    )
    .count();
};

export const getPreviousEmployeeCount = () => {
  return db.employees
    .filter(
      (employee) =>
        employee.endDate !== "" &&
        moment(employee.endDate).isSameOrBefore(moment().subtract(1, "day"))
    )
    .count();
};

export const getEmployee = (id) => {
  return id &&  db.employees.get(id);
};

export const  addEmployee = (employee) => {
  return db.employees.add(employee);
}

export const updateEmployee = (employee) => {
  return db.employees.update(employee.id, employee);
}

export const deleteEmployee = (id) => {
  return db.employees.delete(id);
}


