/* eslint-disable react/prop-types */
import Mycontext from "./Mycontext.js";
import { useEffect, useState } from "react";
import playdata from "../utils/db.json"


const MyProvider = ({ children }) => {
  const [value, setvalue] = useState(true);
  const [trigvalue, settrigvalue] = useState(false);
  const [theme, settheme] = useState("light");
  const [channelPopup, setchannelPopup] = useState(false);
  const [isUser, setUser] = useState('');
  const [isLoggedin, setLogin] = useState();
  const [videodata,setvideodata]=useState(playdata);
  const [videoAdd,setVideoadd]=useState(false)
  const [chnlName,setchnlName]=useState("")
  const [userChannelCreate,setUserChannelCreate]=useState(false)
  
  const loggedInUser = window.localStorage.getItem('LoggedIn');


  useEffect(() => {
    if(loggedInUser==='true')
    {
      setLogin(true);
    }else{
      setLogin(false)
    }
  },[loggedInUser])

  return (
    <Mycontext.Provider
      value={{
        value,
        setvalue,
        trigvalue,
        settrigvalue,
        theme,
        settheme,
        channelPopup,
        setchannelPopup,
        isUser,
        setUser,
        isLoggedin,
        setLogin,
        videodata,
        setvideodata,
        videoAdd,
        setVideoadd,
        chnlName,
        setchnlName,
        userChannelCreate,
        setUserChannelCreate
        
      }}
    >
      {children}
    </Mycontext.Provider>
  );
};

export default MyProvider;
