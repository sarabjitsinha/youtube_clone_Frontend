// import logo from "../assets/logo.jpg"
import Mycontext from "../utils/Mycontext"
import { useContext,useState,useEffect} from "react";
import Profile from "./Profile"
import { Avatar, Button,Stack,useMediaQuery } from "@mui/material"
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import "../App.css"
import jsonviddata from "../utils/db.json"
import axios from "axios";
import YouTubeIcon from '@mui/icons-material/YouTube';

function Header(){

    const {value,setvalue,trigvalue,settrigvalue,
        isLoggedin,setLogin,isUser,videodata,setvideodata}=useContext(Mycontext);
    const user=isUser.split(' ')
    const loguser=user[0][0]
    const navigate=useNavigate();
    const dim=useMediaQuery('(min-width:400px)')
    const dim1=useMediaQuery('(min-width:620px)')
    const [search,setsearch]=useState("")
    const nonfilterdata=[...jsonviddata]    

    
    function handleclick(){
        setvalue(!value);
    }

    function profileclick(){
        settrigvalue(true)
    }

    function handleSearch(){
        let filterdata=videodata.filter((video)=>video.category.toUpperCase().includes(search.toUpperCase()))
        if(!search)
           { filterdata=false };
    
            if(filterdata==false){
                setvideodata(nonfilterdata);
                return
            }
            else {
        setvideodata(filterdata);
         }
        }
        
    useEffect(()=>{

        },[videodata])

        function handleChannel(){
            async function channelData(){
                const resp=await axios.get('http://127.0.0.1:3000/channel',{withCredentials: true,})
                if(resp.data==="token received")
                {
                    navigate('/channel')
                }
            }
            channelData();
        }
    

    return(
        <nav className="flex  justify-between p-1 right-head flex-div">
             <div className="flex ">
        
               <MenuIcon fontSize={dim ? dim1? "large":"medium" :"small"} onClick={handleclick} sx={{alignSelf:"center"}}/>
                {/* <img src={logo} alt=""   onClick={()=>{navigate('/'); setvideodata(nonfilterdata)}} />    */}
                
                <YouTubeIcon color="error" fontSize={dim ? dim1? "large":"medium" :"small"} 
                onClick={()=>{navigate('/'); setvideodata(nonfilterdata)}} />
             </div>   
            
            <div className="flex border-[1px] bg-transparent rounded-full mid-head flex-div ">
            <input type="text" name="search" id="searchBox" 
             className="w-18 h-5 rounded-4xl outline-none border-0 flex pl-2 sm:h-6 sm:w-24 md:w-64 md:h-8 lg:h-8 lg:w-80 xl:h-10"
              onChange={(e)=>setsearch(e.target.value)}/>
             <SearchIcon fontSize={dim ? dim1? "large":"medium" :"small"} onClick={(e)=>handleSearch(e)}/>
            </div>

            <div className="flex left-head flex-div">
            
            <NotificationsNoneIcon fontSize={dim ? dim1? "large":"medium" :"small"} />
            <Stack gap={2} direction={"row"} padding={0.3}>
            <Button
             variant="contained" 
             color={isLoggedin ? "success":"info" }
             disableRipple 
             size="small"
             className=" h-6 sm:h-8 md:h-8 lg:h-8 xl:h-8 w-18"
             onClick={()=>
             {  
                if(isLoggedin){
                    const spanel=document.createElement('div')
                     const bodyEl=document.querySelector('body') 
                    spanel.style.cssText= `
                     background-color: blue;
                     top: 5px;
                     right: 0px;
                     height:38px;
                     width:170px;
                     position:absolute;
                     `
                     bodyEl.appendChild(spanel)  
                     spanel.innerHTML="Logging out..."
                    setTimeout(()=>{
                    spanel.remove(); 
                    setLogin(false)
                    window.localStorage.removeItem('LoggedIn')
                    window.localStorage.removeItem("User")
                    navigate('/')
                    },3000)
                    return
                }
                navigate('/signin')
                
             }
             }>{isLoggedin ? 'Logout':'Sign in'}</Button> 
            </Stack>
                {isLoggedin ? 
                <Avatar sx={{bgcolor:"blue",}} onClick={profileclick} >{loguser}</Avatar>
                :<AccountCircleIcon fontSize={dim ? dim1? "large":"medium" :"small"}
                 color={isLoggedin ? 'success':'info'} onClick={profileclick}/>
                }

            </div>
            <Profile trigger={trigvalue}>
                {isLoggedin && <span onClick={handleChannel} className=" hover:cursor-pointer bg-cyan-500 p-1 rounded-md">Channel</span>}
             </Profile>   
        </nav>
    )
}

export default Header;