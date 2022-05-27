import React, {useState} from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';


function PopupBtn() {
    const [open, setOpen] = useState(false);

    const handleClickToOpen = () => {
        setOpen(true);
    };

    const handleToClose = () => {
        setOpen(false);
    };

  return (
      <div className="popupbtn">
      <div style={{ float: "right"}}>
          <Button variant="outlined" color="primary" onClick={handleClickToOpen}><HelpCenterIcon /></Button>
          <Dialog open={open} onClose={handleToClose}>
              <DialogTitle>{"Hjälp"}</DialogTitle>
              <DialogContentText>I detta hjälpavsnitt ska det finnas information</DialogContentText>
              <DialogActions><Button onClick={handleToClose} color="primary" autoFocus>Stäng</Button></DialogActions>
          </Dialog>
      </div>
      </div>
  );
}
   
export default PopupBtn