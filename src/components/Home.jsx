// import  videoData  from "../utils/db.json";
import "../App.css"
import { useNavigate } from "react-router-dom";
import Mycontext from "../utils/Mycontext";
import { useContext } from "react";


function Home(){
    const {videodata,value}=useContext(Mycontext)
    const navigate=useNavigate();

   function handlevid(id){
            navigate(`/video/${id}`)

    }
        return(

        <div className="flex flex-wrap gap-8 pl-10 w-auto ">
            
            {videodata.map((video)=>{
                return(
                    <div key={video.title} className="flex flex-col h-26 sm:h-52 md:h-72 xl:h-72"  >
                    <div className="flex">
                     <img src={video.thumb} alt="thumb" 
                      className={`thumbs ${value? "w-42 h-20  sm:w-54 sm:h-40 md:w-68 md:h-48 xl:w-86 xl:h-52"
                        :"w-48 h-20 sm:w-60 sm:h-40 md:w-72 md:h-48 xl:w-96 xl:m-2 xl:h-52"}`}
                       onClick={()=>handlevid(video.id)} />   
                             </div>
                    <div className="w-24 font-light text-sm sm:w-36 sm:font-medium sm:text-lg
                     md:w-48 md:font-medium md:text-lg xl:w-72 xl:font-medium xl:text-lg">
                        <ul className=" list-none">
                        <li>{video.title}</li>
                        <li>{Math.floor(Math.random()*(1000-100+1)+100)} {video.like} 
                            &bull; {Math.floor(Math.random()*(15-2+1)+2)} Year ago </li>
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