import React, { useState } from "react";
//  components
import {
  Button,
  Tooltip,
  Fab,
  Modal,
  Container,
  TextField,
  MenuItem,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Snackbar,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import MuiAlert from "@material-ui/lab/Alert";
import { Wrapper } from "./AddButton-style";

const AddButton = () => {
  const [open, openSet] = useState(false);
  const [openAlert, openAlertSet] = useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  //  functions

  const handleOpen = () => {
    openSet(true);
  };

  const handleClose = () => {
    openSet(false);
  };

  const handleOpenAlert = () => {
    openAlertSet(true);
  };

  const handleCloseAlert = () => {
    openAlertSet(false);
  };

  return (
    <Wrapper>
      <Tooltip
        title="Add"
        aria-label="add"
        className="tooltip"
        onClick={handleOpen}
      >
        <Fab
          className="fab"
          style={{ backgroundColor: "#228b22", color: "white" }}
        >
          <Add />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container
          className="modal-container"
          style={{
            color: "red",
            width: "500px",
            height: "560px",
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px 40px",
            margin: "auto",
            position: "fixed",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
          }}
        >
          <form className="form" autoComplete="off">
            <div className="form-textfield">
              <TextField
                id="standard-basic"
                label="Title"
                className="title"
                style={{ width: "100%" }}
              ></TextField>
              <TextField
                id="outlined-mulitline-static"
                multiline
                rows={6}
                defaultValue="Tell your story..."
                variant="outlined"
                label="Description"
                className="description"
                style={{ width: "100%", marginTop: "16px" }}
              ></TextField>
              <TextField
                select
                label="Visibility"
                style={{
                  width: "100%",
                  marginTop: "16px",
                }}
              >
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className="form-radio" style={{ margin: "16px 0" }}>
              <FormLabel>Choose Privacy</FormLabel>
              <RadioGroup style={{ color: "black" }}>
                <FormControlLabel
                  value="Everyone"
                  control={<Radio size="small" />}
                  label="Everyone"
                />
                <FormControlLabel
                  value="Friends"
                  control={<Radio size="small" />}
                  label="Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom(Members Only)"
                />
              </RadioGroup>
            </div>
            <div className="form-button">
              <Button
                variant="outlined"
                color="primary"
                style={{ margin: "0 6px" }}
                onClick={handleOpenAlert}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar //  sucess bar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleCloseAlert}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Form created sucessfully!
        </Alert>
      </Snackbar>
    </Wrapper>
  );
};

export default AddButton;
