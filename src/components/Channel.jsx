import { Typography,Avatar } from "@mui/material"
import AddVideo from "./AddVideo"
import { Link } from "react-router-dom"
import { useState } from "react"
import Home from "./Home"
// import vid1 from "../../uploads/file-1742222100351-.mp4"


export default function Channel(){

    const loginCheck=window.localStorage.getItem('LoggedIn')
    

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
               <video src=""
               controls autoPlay height={"150px"} width={"300px"}></video>
            </div>
        </div>:<Home/>
    )
}

