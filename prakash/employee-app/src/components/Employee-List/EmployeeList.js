import "./EmployeeList.scss";
import Box from "@mui/material/Box";
import { AppBar, Typography, Button } from "@mui/material";
import Footer from "../footer/Footer";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import { useLiveQuery } from "dexie-react-hooks";
import {
  getCurrentEmployees,
  getPreviousEmployees,
  getEmployeeCount,
  getCurrentEmployeeCount,
  getPreviousEmployeeCount,
} from "../../db";
import { Link } from "react-router-dom";
import Employee from "../Employee/Employee";

function EmployeeList() {
  const title = "Current Employees";
  const currentEmployeeLists = useLiveQuery(
    async () => await getCurrentEmployees()
  );
  const currentEmployeeListCount = useLiveQuery(getCurrentEmployeeCount);
  const previousEmployeeLists = useLiveQuery(
    async () => await getPreviousEmployees()
  );
  const employeeListCount = useLiveQuery(() => getEmployeeCount());

  const previousEmployeeListCount = useLiveQuery(() =>
    getPreviousEmployeeCount()
  );
  return (
    <Box component="main" className="employee-list">
      {employeeListCount === 0 && (
        <Box
          className="no-data-found"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",           
            height: "100%",
          }}
        >
          <img src="/nodata.svg" alt="No Data Found" />
        </Box>
      )}
      {employeeListCount > 0 && (
        <>
          <AppBar position="static" className="title-container">
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                backgroundColor: "none",
                color: "#1da1f2",
                fontSize: "15px",
                fontWeight: "bold"
              }}
            >
              {title}
            </Typography>
          </AppBar>

          <Box sx={{padding:"0 15px"}}>
            {currentEmployeeListCount === 0 && (
              <Box
                className="no-data-found"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",                  
                  height: "100%",
                }}
              >
                <img src="/nodata.svg" alt="No Data Found" />
              </Box>
            )}
            {currentEmployeeListCount > 0 &&
              currentEmployeeLists?.map((employee) => {
                return (
                 <Employee  key={employee.id} employee={employee} />
                );
              })}
          </Box>
          <AppBar position="static" className="title-container">
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                backgroundColor: "none",
                color: "#1da1f2",
                fontSize: "15px",
                fontWeight: "bold"
              }}
            >
              Previous Employees
            </Typography>
          </AppBar>
          <Box sx={{padding:"0 15px"}}>
            {previousEmployeeListCount === 0 && (
              <Box
                className="no-data-found"
                sx={{
                  display: "flex",
                  justifySelf: "center",
                  alignItems: "center",                 
                  height: "100%",
                  padding:"0 15px"
                }}
              >
                <img src="/nodata.svg" alt="No Data Found" />
              </Box>
            )}
            {previousEmployeeListCount > 0 &&
              previousEmployeeLists?.map((employee) => (
                <Employee  key={employee.id} employee={employee}  />
              ))}
          </Box>
        </>
      )}
      <Footer className="footer">
        <Link to="/add">
          <Button
            color="inherit"
            sx={{ justifySelf: "right", display: "flex" }}
          >
            <AddBoxRoundedIcon color="primary" sx={{ fontSize: 50 }} />
          </Button>
        </Link>
      </Footer>
    </Box>
  );
}

export default EmployeeList;
