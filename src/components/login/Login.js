import { Fragment, useEffect, useRef, useState } from "react";
//import httpPost from "../Functions/httpPostForm";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/system";
import { Avatar } from "@mui/material";
import { useHistory } from "react-router-dom";
//import { ChatState } from "../store/ChatProvider";

const LogIn = (props) => {
  const refEmailLogIn = useRef();
  const refPasswordLogIn = useRef();

  const history = useHistory();
  //   const { setSnackBar } = ChatState();

//   useEffect(() => {
//     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//     if (userInfo) history.push("/chat");
//   }, [history]);

  const loginHandler = async (event) => {
    // event.preventDefault();
    // const email = refEmailLogIn.current.value;
    // const password = refPasswordLogIn.current.value;
    // let payLoad = { email, password };
    // try {
    //   const data = await httpPost(payLoad, "login");
    //   if (data.userData) {
    //     localStorage.setItem("userInfo", JSON.stringify(data));
    //     history.push("/chat");
    //   } else {
    //     console.log(data.error);
    //     // setSnackBar({
    //     //   open: true,
    //     //   message: data.error.message,
    //     //   severity: "error",
    //     // });
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const displayTheme = createTheme({
    palette: {
      mode: props.theme,
    },
  });

  const MyAvatar = styled(Avatar)({
    height: "80px",
    width: "80px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  });

  return (
    <Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color:"#fff"
          }}
        >
          <MyAvatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </MyAvatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box
            component="form"
            onSubmit={loginHandler}
            noValidate
            sx={{ mt: 1 , color:"#fff"}}
          >
            <TextField
              inputRef={refEmailLogIn}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              sx={{color:"#fff !important"}}
              variant="filled"
              autoFocus
            />
            <TextField
              inputRef={refPasswordLogIn}
              
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              variant="filled"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 , backgroundColor:"#CD5FF8" }}
            >
              Log In
            </Button>
          
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
};
export default LogIn;
