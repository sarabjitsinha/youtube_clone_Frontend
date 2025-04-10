// import  videoData  from "../utils/db.json";
import "../App.css"
import { useNavigate } from "react-router-dom";
import Mycontext from "../utils/Mycontext";
import { useContext } from "react";
import jsonviddata from "../utils/db.json"

function Home(){
    // const [search,setsearch]=useState("")
    const nonfilterdata=[...jsonviddata]
    const {videodata,value,setvideodata}=useContext(Mycontext)
    const navigate=useNavigate();

   function handlevid(id){
            navigate(`/video/${id}`)

               }

               function handleSearch(e){
                    const search=e.target.innerHTML
                    
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

        return(

            <div onClick={(e)=>handleSearch(e)} className="p-2">
<div className=" flex justify-center mb-2">                
<span className="bg-blue-100 text-blue-800 text-xs sm:text-sm md:text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 hover:cursor-pointer">Politics</span>
<span className="bg-gray-100 text-gray-800 text-xs sm:text-sm md:text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300 hover:cursor-pointer">Javascript</span>
<span className="bg-red-100 text-red-800 text-xs sm:text-sm md:text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300 hover:cursor-pointer">Python</span>
<span className="bg-green-100 text-green-800 text-xs hidden sm:inline sm:text-sm md:text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300 hover:cursor-pointer">Music</span>
<span className="bg-yellow-100 text-yellow-800 text-xs hidden sm:inline sm:text-sm md:text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300 hover:cursor-pointer">Technology</span>
<span className="bg-indigo-100 text-indigo-800 text-xs hidden sm:inline sm:text-sm md:text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-indigo-900 dark:text-indigo-300 hover:cursor-pointer">NodeJs</span>
</div>
        <div className="flex flex-wrap gap-6 pl-10 w-auto ">
            
            {videodata.map((video)=>{
                return(
                    <div key={video.title} className="flex flex-col h-36 sm:mb-10 sm:h-52 md:h-72 md:mb-3 xl:h-72"  >
                    <div className="flex">
                     <img src={video.thumb} alt="thumb" 
                      className={`thumbs ${value? "w-44 h-20 sm:w-54 sm:h-42 md:w-60 md:h-48 lg:w-72 xl:w-86 xl:h-52"
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
        </div>
    )
}
export default Home;