import { Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import moment from "moment";
import { Link } from "react-router-dom";
import Edit from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Employee({ employee }) {
  return (
    <Box component={'section'} sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%"
      }}>
      <Box
        spacing={2}
        className="employee-list-container"
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "15px 0",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          className="header-title"
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "#323238",
            paddingBottom: "10px",
          }}
        >
          {employee.name}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            color: "#949c9e",
            lineHeight: "20px",
            paddingBottom: "10px",
          }}
        >
          {employee.destignation}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            color: "#949c9e",
            lineHeight: "20px",
            paddingBottom: "10px",
          }}
        >
          {moment(employee.startDate).format("D MMM YYYY")}
        </Typography>
      </Box>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <Link to={`${"edit/" + employee.id}`}>
          <Button
            color="inherit"
          
          >
            <Edit color="primary" sx={{ fontSize: 30 }} />
          </Button>
        </Link>
        <Button color="inherit" >
          <DeleteIcon color="error" sx={{ fontSize: 30 }} />
        </Button>
      </Box>
    </Box>
  );
}
