/* eslint-disable react/prop-types */

import axios from "axios";
import { useState } from "react";
import Mycontext from "../utils/Mycontext";
import { useContext } from "react";

function AddVideo({vidshow,setvid}){

const [title,settitle]=useState('')
const [category,setcategory]=useState('')
const [file,setfile]=useState()
const {isUser}=useContext(Mycontext)

function handlefile(e){
    setfile(e.target.files[0])
}


async function handleSubmit(e){
    e.preventDefault();
    try {
    const resp=await axios.post("http://127.0.0.1:3000/uploads",{file,title,category,username:isUser},{
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
    alert(resp.data)
    }
    catch (err){
        alert(err)
    }
}


    return(
        (vidshow ?
           
        <div className="text-white w-[600px] 
        h-[400px] bg-slate-600 top-[17%] left-[25%] z-2 absolute flex flex-col justify-around items-center">
                <div>
                    <label htmlFor="title">Enter title</label>
                    <br />
                    <input type="text" name="title" id="title" className="border-2 border-black" 
                    onChange={(e)=>settitle(e.target.value)} />
                    
                </div>

                <div>
                    <label htmlFor="category">Enter the category</label>
                    <input type="text" name="category" id="category" className=" border-2 border-black block" 
                    onChange={(e)=>setcategory(e.target.value)}/>
                </div>
                                    
                <input type="file" name='file' className="border-2 border-black hover:cursor-pointer block " 
                onChange={handlefile} />
               
              <button  className=" bg-green-500 p-1 rounded-2xl w-[50%] block " onClick={handleSubmit}>Submit</button>
              <button onClick={()=>setvid(false)} className=" bg-amber-500 p-1 rounded-2xl w-[50%]">Close</button>
              
        </div> : null)
    )
}     

export default AddVideo;