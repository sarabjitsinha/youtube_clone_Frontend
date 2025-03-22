// import  videoData  from "../utils/db.json";
import "../App.css"
import { useNavigate } from "react-router-dom";
import Mycontext from "../utils/Mycontext";
import { useContext } from "react";


function Home(){
    const {videodata}=useContext(Mycontext)
    const navigate=useNavigate();

   function handlevid(id){
            navigate(`/video/${id}`)

    }
        return(

        <div className="flex flex-wrap gap-5 pl-8 w-auto">
            
            {videodata.map((video)=>{
                return(
                    <div key={video.title} className="flex flex-col h-26 sm:h-52 md:h-72 xl:h-72"  >
                    <div className="flex">
                     <img src={video.thumb} alt="thumb" 
                      className="thumbs w-42 h-20 sm:w-54 sm:h-40 md:w-68 md:h-48 xl:w-86 xl:h-52" onClick={()=>handlevid(video.id)} />   
                     {/* <video src={video.sources}  allowFullScreen autoPlay='0'
                    className={`w-24 sm:w-36 md:w-60 xl:w-88`} 
                    onClick={()=>handlevid(video.id)}
                    />  */}
                    </div>
                    <div className="w-24 font-light text-sm sm:w-36 sm:font-medium sm:text-lg
                     md:w-48 md:font-medium md:text-xl xl:w-72 xl:font-medium xl:text-2xl">
                        <ul className=" list-none">
                        <li>{video.title}</li>
                        <li>{video.like}</li>
                        </ul>
                    </div>
                    
                        </div>
                )
            })
            
            }
                        
        </div>
    )
}
export default Home;