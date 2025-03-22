/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import Mycontext from "../utils/Mycontext";
import { useContext } from "react";


function Profile(props){
    const {settrigvalue,theme,settheme}=useContext(Mycontext);
    // const divEl=document.querySelector('#popup');
    // props.trigger &&
    // divEl.classList.add('dark')
    
    

    function handleclick(){
        settrigvalue(false)
    }

    function handletheme(){
        const bodyEl=document.querySelector('body')
        // const divEl=document.querySelector('#popup');

        if(bodyEl.classList.contains('dark'))
        {  

            bodyEl.classList.remove('dark')
            // divEl.classList.remove('dark')
            settheme("light");
            return
        }
        else
        {
            
            bodyEl.classList.add('dark')
            // divEl.classList.add('dark')
            settheme('dark')
        }
        
    }

    return (props.trigger) ?

        (<div className= {`right-0 top-12 z-1 absolute bg-white border-stone-400 border-1 flex-col ${props.trigger? theme:null}`} id="popup">
            <Button variant="contained" color="secondary" sx={{display:"block",maxHeight:"25px"}} size="small"  onClick={handletheme}>
                Toggle theme - {theme=='dark' ? "Light":"Dark"}</Button>
            <label htmlFor="">Preferences</label>
            <Button variant="contained" color="info" onClick={handleclick} sx={{display:"block",height:"25px"}} size="small">Close</Button>
            {props.children}
        </div>
    ) :"";
}


export default Profile;