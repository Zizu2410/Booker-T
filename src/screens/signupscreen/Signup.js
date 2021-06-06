import React from "react";
import "./signup.css";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { Link} from 'react-router-dom'

const SignUp = () => {
  const paperStyle = {
    padding: "30px 20px",
    width: 400,
    height: 550,
    margin: "20px auto",
  };

  const avatarStyle = {
    width: 60,
    height: 60,
    color: "#ffff",
    background: "#0F7C90",
    margin: "10px 0px",
  };

  return (
    <Grid>
      <Paper elevation={4} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle} />
          <h3>Sign Up and start Learning!</h3>
        </Grid>

        <form className="signup__form">
          <div className="signup__textfields">
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
          </div>

          <FormControlLabel
            control={<Checkbox color="primary" name="checkbox" />}
            label="Yes! I want to get the most out BOOKER-T by receiving emails with 
            exclusive deals,personal recommendations and learning tips!"
          />

          <div className="signip__btn">
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
                <Link to='/login'>
                    <p className='login_url'>Login</p>
                </Link>
              </span>
            </p>
          </div>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUp;
