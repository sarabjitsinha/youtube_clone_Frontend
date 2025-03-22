/* eslint-disable react/prop-types */
import Mycontext from "./Mycontext.js";
import { useState } from "react";
import playdata from "../utils/db.json"


const MyProvider = ({ children }) => {
  const [value, setvalue] = useState(true);
  const [trigvalue, settrigvalue] = useState(false);
  const [theme, settheme] = useState("light");
  const [channelPopup, setchannelPopup] = useState(false);
  const [isUser, setUser] = useState('');
  const [isLoggedin, setLogin] = useState(false);
  const [videodata,setvideodata]=useState(playdata)
  
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
        setvideodata
      }}
    >
      {children}
    </Mycontext.Provider>
  );
};

export default MyProvider;
