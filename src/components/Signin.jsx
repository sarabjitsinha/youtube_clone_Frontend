import {
  Grid2,
  Paper,
  Typography,
  Button,
  Link,
  TextField,
  Avatar,
  
} from "@mui/material";
import "../App.css";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useEffect, useState } from "react";
import Mycontext from "../utils/Mycontext.js"
import { useContext } from "react";

function Signin() {

  
  const navigate = useNavigate();
  const [userName,setUsername]=useState('');
  const [password,setpsswd]=useState('')
  const [flag,setflag]=useState(false);
  const {setLogin,setUser,theme,isLoggedin,isUser}=useContext(Mycontext)


 
  useEffect(()=>{ 
    window.localStorage.setItem("LoggedIn",isLoggedin)
    // window.localStorage.setItem("User",isUser)
    
  },[isLoggedin,isUser])

    function handleSubmit(){

      async function userValid() {
        
        const usercheck= await axios.post('http://127.0.0.1:3000/signin',{userName,password});
      
        if(!usercheck.data)
        {
          alert('User not registered')
           return;
        }
        if(usercheck.data==="incorrect password")
        {
          alert('incorrect password')
          setflag(true)
          return
        }
        else if(usercheck.data.message==='success'){
          setUser(userName)
          setLogin(true)
          window.localStorage.setItem("User",userName)
          navigate('/')
        }
        
              }
userValid();    
        
    }

  return (
    <div className={`${theme}`}>
      <Grid2
        sx={{
          height: "100vh",
          position: "relative",
        }}
      >
        <Paper
          elevation={10}
          className="paperStyle"
          style={{ backgroundColor: "#3ed764", top: "40px", padding: "15px" }}
        >
          <Grid2 align="center">
            <Avatar sx={{ backgroundColor: "blue" }}>
              <LockOpenRoundedIcon />
            </Avatar>
            <br />
            <Typography variant="h4"> Sign In</Typography>
          </Grid2>
          <TextField
            label="Username"
            variant="standard"
            required
            fullWidth
            placeholder="Enter username"
            autoComplete="off"
            onChange={(e)=>setUsername(e.target.value)}
          ></TextField>
          <TextField
            label="Password"
            variant="standard"
            required
            type="password"
            fullWidth
            placeholder="Enter password"
            helperText={flag ? 'Incorrect password':"keep the password in secure place"}
            autoComplete="off"
            onChange={(e)=>setpsswd(e.target.value)}
          ></TextField>
          <br />
          <br />
          <Button
            variant="contained"
            color="info"
            fullWidth
            onClick={handleSubmit}
          >
            Login
          </Button>
          <br /><br />
          <Typography variant="subtitle1">
            {"Don't have an account? Sign up"}
            <Link href="/register">Click here</Link>
          </Typography>
        </Paper>
      </Grid2>
    </div>
  );
}

export default Signin;
