import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  TextField,
  Box,
  Select,
  MenuItem,
  Container,
  Button,
} from "@mui/material";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import moment from "moment";
import { useNavigate } from "react-router";
import { addEmployee, updateEmployee } from "../../db";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useLiveQuery } from "dexie-react-hooks";
import { getEmployee } from "../../db";

export default function CreateEmployee() {
  let navigate = useNavigate();
  let { id } = useParams();

  const [form, setFormData] = useState({
    name: "",
    destignation: "",
    startDate: null,
    endDate: null,
  });
  const formValue = useLiveQuery(() => (id ? getEmployee(parseInt(id)) : null));
  useEffect(() => {
    if (formValue?.name) {
      console.log(formValue);
      setFormData({
        ...formValue,
        startDate: formValue.startDate ? moment(formValue.startDate) : null,
        endDate: formValue.endDate ? moment(formValue.endDate) : null,
        id
      });
    }
  }, [formValue, id]);

  const handleChange = (event, context) => {
    if (moment.isMoment(event)) {
      setFormData({ ...form, [context]: event });
    } else {
      setFormData({ ...form, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = () => {
    let formValue = {
      ...form,
      startDate: moment.isDate(form.startDate)
        ? form.startDate
        : form.startDate.toDate(),
      endDate: moment.isDate(form.endDate)
        ? form.endDate
        : form.endDate
        ? form.endDate.toDate()
        : moment().toDate(),
    };
    if (id) {
      formValue = { ...formValue, id };
      console.log(formValue);
      updateEmployee(formValue);
    } else {
      addEmployee(formValue);
    }

    navigate("/");
  };

  const destignationList = [
    "Product Designer",
    "Flutter Developer",
    "QA Tester",
    "Product Owner",
  ];

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        height: "100vh",
        rowGap: "16px",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Employee Name"
        variant="outlined"
        value={form.name}
        onChange={handleChange}
        name="name"
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Employee Destignation
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={form.destignation}
          label="Employee Destignation"
          onChange={handleChange}
          name="destignation"
        >
          {destignationList.map((destignation, index) => (
            <MenuItem value={destignation}>{destignation}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box
        
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          columnGap: "16px",
        }}
        disableGutters={true}
      >
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            label="Start Date"
            value={form.startDate}
            onChange={(date) => handleChange(date, "startDate")}
            name="startDate"
          />
          <DatePicker
            label="End Date"
            value={form.endDate}
            onChange={(date) => handleChange(date, "endDate")}
            name="endDate"
          />
        </LocalizationProvider>
      </Box>
      <Footer className="footer">
        <Box
          section="footer"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "16px",
            columnGap: "16px",
          }}
        >
          <Link to="/">
            <Button
              variant="outlined"
              sx={{ justifySelf: "right", display: "flex" }}
            >
              Cancel
            </Button>
          </Link>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ justifySelf: "right", display: "flex" }}
          >
            Save
          </Button>
        </Box>
      </Footer>
    </Box>
  );
}
