import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import PopUp from "./popUp";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const [gender, setValueGender] = useState("Male");
  const [btnPop, setbtnPop] = useState(true);
  const [type, setValueType] = useState("Tourist");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:5000/api/auth/register",
      withCredentials: true,
      data: {
        name,
        email,
        password,
        gender,
        type,
      },
    }).then((res) => {
      console.log(res);
      window.location = "/feed";
    });
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} action="" onSubmit={handleSignIn}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="Name"
                variant="outlined"
                required
                fullWidth
                id="name"
                onChange={(e) => setname(e.target.value)}
                value={name}
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={(e) => setemail(e.target.value)}
                value={email}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid container justify="center" spacing={10}>
              <Grid item>
                <FormControl>
                  <FormLabel>Gander : </FormLabel>
                  <RadioGroup
                    value={gender}
                    onChange={(e) => {
                      setValueGender(e.target.value);
                      console.log(e.target.value);
                    }}
                  >
                    <FormControlLabel
                      value="Male"
                      label="Male"
                      control={<Radio color="primary"></Radio>}
                    ></FormControlLabel>
                    <FormControlLabel
                      value="Female"
                      label="Female"
                      control={<Radio color="primary"></Radio>}
                    ></FormControlLabel>
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl>
                  <FormLabel>I am : </FormLabel>
                  <RadioGroup
                    value={type}
                    onChange={(e) => {
                      setValueType(e.target.value);
                      console.log(e.target.value);
                    }}
                  >
                    <FormControlLabel
                      value="Tourist"
                      label="Tourist"
                      control={<Radio color="primary"></Radio>}
                    ></FormControlLabel>
                    <FormControlLabel
                      value="Guide"
                      label="Guide"
                      control={<Radio color="primary"></Radio>}
                    ></FormControlLabel>
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item></Grid>
          </Grid>
        </form>
      </div>
      <Box mt={1}>
        <Copyright />
      </Box>
    </Container>
  );
}
