
import { useParams } from "react-router-dom";
import videodata from "../utils/db.json"
import Sidecard from "./Sidecard";
import { useMediaQuery,Avatar } from "@mui/material";
import { useState,useEffect } from "react";

function VideoPlay(){

    const [comment,setcomment]=useState("")
    const playFlag=useMediaQuery('(max-width:600px)')
    const params=useParams();
    const videoWatch=videodata.find((item)=>item.id==params.id)
    const videoArray=videoWatch.comments;
    const [commentArray,setcommentArray]=useState(videoArray)
    
    useEffect(()=>{
        setcommentArray(videoArray)
    },[videoArray])

    function Handleclick(comment){
   setcommentArray((prev)=>[...prev,comment])
    }
    return(
        <div >
            {playFlag ? <video src={videoWatch.sources} autoPlay allowfullscreen controls className=" w-screen h-screen"  ></video>:
                <div className="flex gap-10">
            <section className="h-[40%] w-[55%] ml-[8%] mt-2 ">
                <video src={videoWatch.sources} autoPlay allowfullscreen controls className=" rounded-2xl" ></video>
                    <br />
                <h2 className=" font-bold text-xl">Title</h2>
                <div className=" font-semibold text-lg">{videoWatch.description}</div>
                <br />
                <div className=" font-bold text-xl">{commentArray.length} comments</div>
                <br />
            {commentArray.map((comment,index)=>{
                        return (
                            <div key={index} className="flex p-5">
                                <Avatar></Avatar>
                        <p className=" pl-2 pt-1">{comment} </p>
                        <br />
                        </div>)
                    })}
                    <label htmlFor="commentsentry" className=" block">Leave comments</label>
                    <textarea name="" id="commentsentry" onKeyUp={(e)=>setcomment(e.target.value)}
                     className="block border-[1px] border-black"></textarea>
                    <button type="submit" onClick={()=>Handleclick(comment)}
                        className=" bg-slate-400 rounded-3xl p-1 hover:cursor-pointer mt-1"
                        >Submit</button>
            </section>
            <Sidecard/>
            </div> }
        </div>
    )
}

export default VideoPlay;