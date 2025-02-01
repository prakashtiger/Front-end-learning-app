import { Paper } from "@mui/material";

export default function Footer({ children }) {
  return (
    <Paper
      component="footer"
      className="footer-container"
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      {children}
    </Paper>
  );
}
