import { Routes, Route } from "react-router";
import App from "./App";
import EmployeeList from "./components/Employee-List/EmployeeList";
import CreateEmployee from "./components/create-employee/CreateEmployee";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<EmployeeList  />} />
            <Route path="add" element={<CreateEmployee  />} />
            <Route path="edit/:id" element={<CreateEmployee  />} />
        </Route>
      </Routes>
    </>
  );
}
