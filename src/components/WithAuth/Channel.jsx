/* eslint-disable react-hooks/exhaustive-deps */
import { Typography,Avatar } from "@mui/material"
import AddVideo from "./AddVideo"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Home from "../Home"
import axios from "axios"
import Mycontext from "../../utils/Mycontext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export default function Channel(){
    const {videoAdd,chnlName,setchnlName}=useContext(Mycontext)
    const [uservideo,setuservideo]=useState([])
    const [channelFlag,setchannelFlag]=useState(false)
    const loginCheck=window.localStorage.getItem('LoggedIn')
    const [vidbarshow,setvidbarshow]=useState(false)
    const [promisecheck,setpromisecheck]=useState(true)
    const navigate=useNavigate()

    async function channelVideo(){
        setchnlName("")
        const resp= await axios.get('http://127.0.0.1:3000/channelvideo',
            {headers:{'x-username':window.localStorage.getItem("User")},withCredentials:true}
        )
        
        if(!chnlName){
            setpromisecheck(false)
        }
        setuservideo(resp.data)
        
        if(resp.data.length>0){
            setchannelFlag(true)
        }
        else if(chnlName){
            setchannelFlag(true)
            setpromisecheck(true)
        }
    }
    
    async function getChannelName() {
        const resp=await axios.get("http://127.0.0.1:3000/channelname",{headers:{"x-username":window.localStorage.getItem("User")},withCredentials:true})
        if(resp.data)
        setchnlName(resp.data)
        else
        setchnlName("")
    }


    useEffect(()=>{
     channelVideo();
     getChannelName();
    },[videoAdd])

    async function handleVideoDelete(target) {
        const resp=await axios.delete("http://127.0.0.1:3000/delete",{
            headers:{"x-username":window.localStorage.getItem("User"),"x-url":target}});
            console.log(resp)
            if(resp.data=="success")
            {
                alert("Video successfully deleted")
                navigate('/')
            }
            if(resp.data=="error")
            {
                alert("error")
            }
        
    }
    

    return ((loginCheck)?

        <div className=" h-full w-full relative flex flex-col p-3 gap-5">
            
        <div className=" flex justify-between">
            <div className=" flex flex-col">
                
            <Typography variant="subtitle1" >
           <Link to='/createchannel'  >
           {channelFlag  ? `Your channel ->${chnlName ? chnlName:"Loading..."}`:`${promisecheck ?"Loading":"Create Channel"}`}</Link>
            </Typography>
            
            <div onClick={()=>setvidbarshow(true)} className=" cursor-pointer" > 
                Add video</div>
                <AddVideo vidshow={vidbarshow} setvid={setvidbarshow}/>
                
                <div>
                    <Typography variant="subtitle1">
                        Your subscribers
                    </Typography>
                </div>
                </div>
                
            <div className="w-[90%] p-2 h-[45vh] bg-blue-400 relative ">
                    <div>
                                 
                    <Avatar sx={{height:"100px",width:"100px",top:"80%",position:"absolute"}}></Avatar>
                </div>
            </div>
            </div>    

            <div className="pt-15">
                <h2>See what is happening</h2>
            </div>
            
                <p className="p-3">Your channel videos will appear here</p>
                <div className="flex p-5 gap-2">  
                    { uservideo.map((video,index)=>{
                        return(
                            <div key={index}>
               <video src={video.video_path}
               controls  height={"150px"} width={"300px"}></video>
               <span> Title- {video.video_title} &nbsp; </span>
               <button type="submit" className=" bg-red-400 rounded-xl hover:cursor-pointer " onClick={()=>handleVideoDelete(video.video_path)}>Delete</button>
               </div>
               )
            })}
            </div>
        </div>:<Home/>
    )
}

