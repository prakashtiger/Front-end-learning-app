import "./App.scss";
import Header from "./components/Header/Header";
import { Outlet } from "react-router";
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const renderHeader = () => {
    switch (location.pathname) {
      case '/edit':
        return 'Edit Employee';
      case '/add':
        return 'Add Employee';
      default:
        return 'Employee List';
    }
  };
  return (
    <>
      <Header title={renderHeader()} className="header" />
      <Outlet />
    </>
  );
}

export default App;
