import { Typography,Avatar } from "@mui/material"
import AddVideo from "./AddVideo"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Home from "./Home"
import axios from "axios"

export default function Channel(){

    const [uservideo,setuservideo]=useState([])
    const loginCheck=window.localStorage.getItem('LoggedIn')
    
    async function channelVideo(){
        const resp= await axios.get('http://127.0.0.1:3000/channelvideo',
            {headers:{'x-username':window.localStorage.getItem("User")},withCredentials:true},
        )
        setuservideo(resp.data)
    }

    useEffect(()=>{
     channelVideo()
    },[])

    const [vidbarshow,setvidbarshow]=useState(false)

    return ((loginCheck)?

        <div className=" h-full w-full relative flex flex-col p-3 gap-5">
            
        <div className=" flex justify-between">
            <div className=" flex flex-col">
            <Typography variant="subtitle1" >
           <Link to='/createchannel'> Create Channel</Link>
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
               <video src={video}
               controls  height={"150px"} width={"300px"}></video>
               </div>
               )
            })}
            </div>
        </div>:<Home/>
    )
}

