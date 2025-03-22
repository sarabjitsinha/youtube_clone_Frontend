import videodata from "../utils/db.json"
// import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Sidecard(){
    // const vidflag=useMediaQuery('(min-width:600px)')
    const navigate=useNavigate()
    return (
        
        <div>
            {videodata.map((video)=>{
                return(
                    <div key={video.id} className=" flex-col w-96 ">
                        <div className=" flex p-4">
                            <img src={video.thumb} alt="thumbnail" onClick={()=>navigate(`/video/${video.id}`)} className="w-56 rounded-2xl" />
                        {/* <video src={video.sources} controls className="w-56"></video> */}
                        <div className=" flex-col gap-3 font-serif p-2 ">
                        <p>{video.title}</p>
                        <p>{video.subtitle}</p>
                        </div>
                        </div>
                    </div>
                )
            })}

        </div> 
    )
}

export default Sidecard;