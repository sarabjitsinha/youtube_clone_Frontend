/* eslint-disable react/prop-types */

import axios from "axios";
import { useState } from "react";

function Testvideo({vidshow,setvid}){

// const [title,settitle]=useState('')
// const [category,setcategory]=useState('')
// const [file,setfile]=useState()

 const [formdata,setformdata]=useState({
    title:'',
    category:'',
    file:null
 })  
function handlefile(e){
    const {name,value,type,files }=e.target
    setformdata({
        ...formdata,
        [name]:type==='file' ? files[0]:value
    })
}

// function handlefile(e){
//     setfile(e.target.files[0])
// }

// function handleClick(){
//     const formdata= new FormData();
//      formdata.append('file',file)
//     axios.post("http://127.0.0.1:3000/uploads",formdata)
//    .then((resp)=>{alert(resp.data)})
//     .catch((err)=>console.log(err))
    
// }

// async function handleSubmit(e){
//     e.preventDefault();
//     try {
//     const resp=await axios.post("http://127.0.0.1:3000/uploads",{file,title,category},{
//         headers:{
//             'Content-Type':'multipart/form-data'
//         }
//     })
//     alert(resp.data)
//     }
//     catch (err){
//         alert(err)
//     }
// }

 function handleSubmit(e) {
    e.prevenDefault()
    const data= new FormData();
    data.append('title',formdata.title);
    data.append('category',formdata.category)
    if(formdata.file){
     data.append('file',formdata.file)
    }
    axios.post("http://127.0.0.1:3000/uploads",data,{headers:{
        'Content-Type':"multipart/form-data"
    }})
   .then((resp)=>{alert(resp.data)})
    .catch((err)=>console.log(err))
    setvid(false)
}

    return(
        (vidshow ?
            <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="text-white w-[600px] 
        h-[400px] bg-slate-600 top-[17%] left-[25%] z-2 absolute flex flex-col justify-around items-center">
                <div>
                    <label htmlFor="title">Enter title</label>
                    <br />
                    <input type="text" name="title" id="title" className="border-2 border-black" 
                    onChange={handlefile} value={formdata.title} />
                    
                </div>

                <div>
                    <label htmlFor="category">Enter the category</label>
                    <input type="text" name="category" id="category" className=" border-2 border-black block" 
                    onChange={handlefile} value={formdata.category}/>
                </div>
                                    
                <input type="file" name='file' className="border-2 border-black hover:cursor-pointer block " 
                onChange={handlefile} />
                <button type="submit" className=" bg-slate-400" >upload</button>
              <button  className=" bg-green-500 p-1 rounded-2xl w-[50%] block " >Submit</button>
              <button onClick={()=>setvid(false)} className=" bg-amber-500 p-1 rounded-2xl w-[50%]">Close</button>
              
        </div> 
         </form>
        : null)
    )
}     

export default Testvideo;