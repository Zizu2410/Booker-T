import React from "react";
import "../signupscreen/Signup";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

const SignUp = () => {
  const paperStyle = {
    padding: "30px 20px",
    width: 400,
    height: 500,
    margin: "20px auto",
  };

  const avatarStyle = {
    width: 50,
    height: 50,
    color: "#ffff",
    background: "#0F7C90",
  };

  return (
    <Grid>
      <Paper elevation={4} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle} />
          <h3>Sign Up and start Learning!</h3>
        </Grid>

        <form>
          <TextField
            fullWidth
            required
            variant="outlined"
            label="Full Name"
            placeholder="Enter your Name"
          />

          <TextField
            fullWidth
            variant="outlined"
            typle="email"
            required
            label="Email"
            placeholder="example@gmail.com"
          />

          <TextField
            fullWidth
            required
            variant="outlined"
            type="password"
            label="Password"
            placeholder="Enter Password"
          />

          <FormControlLabel
            control={<Checkbox color="primary" name="checkbox" />}
            label="Yes! I want to get the most out of This website by receiving emails with 
            exclusive deals,personal recommendations and learning tips!"
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            background-color="#0F7C90"
          >
            Sign Up
          </Button>

          <p>
            Already have an account?
            <span>
              <a href="#">log In</a>
            </span>
          </p>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUp;
