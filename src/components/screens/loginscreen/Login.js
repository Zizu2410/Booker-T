import React from "react";
import "./login.css";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

const Login = () => {
  const paperStyle = {
    padding: "30px 20px",
    width: 400,
    height: 500,
    margin: "20px auto",
  };

  const avatarStyle = {
    width: 60,
    height: 60,
    color: "#ffff",
    background: "#0F7C90",
  };

  return (
    <Grid>
      <Paper elevation={4} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle} />
          <h1>Login</h1>
        </Grid>

        <form className="login__form">
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
            label="Remember me"
          />

          <div className="login__loginbtn">
            <Button
              fullWidth
              type="submit"
              variant="contained"
              background-color="#0F7C90"
            >
              Login
            </Button>

            <p>
              or
              <span>
                <a href="#">Forgot Password</a>
              </span>
            </p>
          </div>

          <div className="login__signupLink">
            <p>
              Dont have an account?
              <span>
                <a href="#">Sign Up</a>
              </span>
            </p>
          </div>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
