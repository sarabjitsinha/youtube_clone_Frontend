/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import videodata from "../utils/db.json"
import Sidecard from "./Sidecard";
import { useMediaQuery,Avatar } from "@mui/material";
import { useState,useReducer } from "react";

function VideoPlay(){
    const [comment,setcomment]=useState("")
    const playFlag=useMediaQuery('(max-width:600px)')
    const params=useParams();
    const vidoeWatch=videodata.find((item)=>item.id==params.id)
    const videoArray=vidoeWatch.comments;

    const [initialstate,dispatch]=useReducer(reducer,videoArray)
    

    function reducer(state,action){
          state.push(comment)
    }
   
    
    return(
        <div >
            {playFlag ? <video src={vidoeWatch.sources} autoPlay allowfullscreen controls className=" w-screen h-screen"  ></video>:
                <div className="flex gap-10">
            <section className="h-[40%] w-[55%] ml-[8%] mt-2 ">
                <video src={vidoeWatch.sources} autoPlay allowfullscreen controls className=" rounded-2xl" ></video>
                    <br />
                <h2 className=" font-bold text-xl">Title</h2>
                <div className=" font-semibold text-lg">{vidoeWatch.description}</div>
                <br />
                <div className=" font-bold text-xl">{vidoeWatch.comments.length} comments</div>
                <br />
            {vidoeWatch.comments.map((comment,index)=>{
                        return (
                            <div key={index} className="flex p-5">
                                <Avatar></Avatar>
                        <p className=" pl-2 pt-1">{comment} </p>
                        <br />
                        </div>)
                    })}
                    <label htmlFor="" className=" block">Leave comments</label>
                    <textarea name="" id="commentsentry" onKeyUp={(e)=>setcomment(e.target.value)}
                     className="block border-[1px] border-black"></textarea>
                    <button type="submit" onClick={()=>dispatch(comment)}
                        className=" bg-slate-400 rounded-3xl p-1 hover:cursor-pointer mt-1"
                        >Submit</button>
            </section>
            <Sidecard/>
            </div> }
        </div>
    )
}

export default VideoPlay;