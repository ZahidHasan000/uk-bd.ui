import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import { Divider, Grid, TextField } from "@mui/material";
import CustomDialog from "../../../components/customDialog/CustomDialog";
<<<<<<< HEAD
=======
import { useAuthInfo } from "../../../helpers/AuthCheck";
>>>>>>> e695b829de964c4dcfa7d0ea97a2f5d5e7b084bf

export default function UpcomingRenting() {
  const [openEmail, setOpenEmail] = React.useState(false);
  const [openPhoneNumber, setOpenPhoneNumber] = React.useState(false);
  const [openAddress, setOpenAddress] = React.useState(false);
  const [selectedDialog, setSelectedDialog] = React.useState("");

<<<<<<< HEAD
=======
  const userInfo = useAuthInfo();

>>>>>>> e695b829de964c4dcfa7d0ea97a2f5d5e7b084bf
  const handleDialogOpen = (dialogType) => {
    setSelectedDialog(dialogType);
    if (dialogType === "email") {
      setOpenEmail(true);
    } else if (dialogType === "phoneNumber") {
      setOpenPhoneNumber(true);
    } else if (dialogType === "address") {
      setOpenAddress(true);
    }
  };

  const handleDialogClose = (event, reason) => {
    if (reason !== "backdropClick") {
      if (selectedDialog === "email") {
        setOpenEmail(false);
      } else if (selectedDialog === "phoneNumber") {
        setOpenPhoneNumber(false);
      } else if (selectedDialog === "address") {
        setOpenAddress(false);
      }
    }
  };

  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            aria-label="contacts"
          >
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleDialogOpen("email")}>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Email" />
              </ListItemButton>
            </ListItem>
            <CustomDialog
              handleClose={handleDialogClose}
              open={openEmail}
              title={"Email"}
              input={
                <TextField
                  id="standard-basic"
                  label="Email"
<<<<<<< HEAD
                  value={"jahid@gmail.com"}
=======
                  value={userInfo.email}
>>>>>>> e695b829de964c4dcfa7d0ea97a2f5d5e7b084bf
                  variant="standard"
                />
              }
            />
            <Divider variant="inset" component="li" />
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleDialogOpen("phoneNumber")}>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Phone Number" />
              </ListItemButton>
            </ListItem>
            <CustomDialog
              handleClose={handleDialogClose}
              open={openPhoneNumber}
              title={"Phone Number"}
              input={
                <TextField
                  id="standard-basic"
                  label="Phone Number"
                  value={"017388363873"}
                  variant="standard"
                />
              }
            />
            <Divider variant="inset" component="li" />
          </List>
        </Grid>
        <Grid item xs={6}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            aria-label="contacts"
          >
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleDialogOpen("address")}>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Address" />
              </ListItemButton>
            </ListItem>

<<<<<<< HEAD
            <CustomDialog 
=======
            <CustomDialog
>>>>>>> e695b829de964c4dcfa7d0ea97a2f5d5e7b084bf
              handleClose={handleDialogClose}
              open={openAddress}
              title={"Address"}
              input={
                <TextField
                  id="standard-basic"
<<<<<<< HEAD
                  label="Address"
                  value={"dhanmondi, dhaka"}
=======
                  label="Name"
                  value={userInfo.name}
>>>>>>> e695b829de964c4dcfa7d0ea97a2f5d5e7b084bf
                  variant="standard"
                />
              }
            />

            <Divider variant="inset" component="li" />
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleDialogOpen("phoneNumber")}>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Phone Number" />
              </ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        </Grid>
      </Grid>
    </div>
  );
}
