import { Typography,Button,Grid2,Paper,Link,Avatar,TextField } from "@mui/material";
import "../App.css"
import { blue,purple } from "@mui/material/colors";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Mycontext from "../utils/Mycontext.js"
import { useContext } from "react";
import bcrypt from "bcryptjs"
import { useEffect } from "react";


function Register(){
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [password,setpswd]=useState('');
    const [nameflag,setnameflag]=useState(false)
    const [emailFlag,setEmailflag]=useState(false)
    const [pswdflag,setpswdflag]=useState(false)
    const navigate=useNavigate()
    const {setLogin,setUser}=useContext(Mycontext);
    const [hash,sethash]=useState('')

    useEffect(()=>{
        const saltrounds=10;

            bcrypt.hash(password,saltrounds,(err,hashedPassword)=>{
                if(err){
                    console.log("hashing error");
                    return;
                }
                
                sethash(hashedPassword)
                
            })

    },[password])


    function handlesubmit(){
            if(((!nameflag) && (!emailFlag) && (!pswdflag))){
                alert("invalid details")
                return;
            }

            const datasubmit=async () => {

            const result=await axios.post('https://youtube-clone-backend-omega.vercel.app:3000/register',{name,email:email.toUpperCase(),password:hash})
            if(!result.data)
            {
                console.log("error");
                return
             }
             if(result.data==="User exists")
             {
                alert("User already registered.Please login");
                return
             }
             if(result.data==="success"){
                    setLogin(true);
                    window.localStorage.setItem("User",email)
                    // const newUserName=window.localStorage.getItem("User",email)
                    window.localStorage.setItem('LoggedIn',true)
                    setUser(name)
                    navigate('/')                
             } 
             else if(result.data==="fail")
                {
                    navigate('/register')
                }              
        }
        datasubmit();
    }

    function handleName(e){
        const regex=/^[a-zA-Z0-9]{10}$/
        setname(e.target.value)
        if(name.match(regex))
            {
            setnameflag(true)
            return true
        }

        else {
            setnameflag(false)
        }
        
    }

    function handleEmail(e){
        const eregex=/^[a-zA-Z0-9]*@{1}[a-zA-Z]*\.[a-zA-z]{2,3}$/
        setemail(e.target.value);
        if(email.match(eregex))
        {
            setEmailflag(true)
            return true
        }
        else {
            setEmailflag(false)
        }
    }

    function handlePswd(e){
        const pregex=/^[a-zA-Z0-9]{8}$/
        setpswd(e.target.value)
        if(password.match(pregex))
        {
            setpswdflag(true)
            return
        }
        else {
            setpswdflag(false)
        }
    }
    return(

        <Grid2 sx={{height:"100vh"} }>
            <Paper elevation={10} className="registerStyle" sx={{bgcolor:purple.A200}}>
        <Grid2 align="center" sx={{padding:2}} >
        <Avatar sx={{bgcolor:blue[900]}}>
        <HowToRegIcon/>
        </Avatar>
        <Typography variant="h3" >
            Register
        </Typography>
        </Grid2>
        
        <TextField
         label="Name"
         placeholder="Enter your name"
         required
         variant="standard"
         fullWidth
         autoComplete="off"
         helperText={nameflag ? "Name validation successful":"Name should atleast be 10 character long"}   
         onChange={(e)=>handleName(e)}
         />
        <br /><br />
        <TextField 
        variant="standard"
        fullWidth
        type="email"
        label="Email"
        placeholder="Enter your email"
        required
        autoComplete="off"
        onChange={(e)=>handleEmail(e)}
        helperText={emailFlag ? "Email validation successful":"please enter valid email, no special character allowed"}
        />
        <br /><br />
        <TextField
        variant="standard"
        type="password"
        label="Password"
        placeholder="Enter password"
        fullWidth
        helperText={pswdflag ? 'success':"Password must be 8 character long"}
        required
        autoComplete="off"
        onChange={(e)=>handlePswd(e)}
        />
        <br />
        <Button variant="contained" color="primary" size="small" onClick={(e)=>handlesubmit(e)}>Register</Button>
        <br />
        <Typography variant="subtitle1">Already Registered?
            <Link href='/signin'>Sign In</Link></Typography>
        </Paper>
        </Grid2>
    )

}

export default Register;