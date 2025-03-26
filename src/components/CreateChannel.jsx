import { Typography,Grid2,Paper,Avatar,TextField, Stack,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Mycontext from "../utils/Mycontext";
import { useContext, useState } from "react";
import axios from "axios";

function CreateChannel(){
    const {isUser}=useContext(Mycontext)
    const [channelCreate,setChannelcreate]=useState("")
    const navigate=useNavigate()

   async function handleChannel(){
        const resp= await axios.post('http://127.0.0.1:3000/addchannel',
            {username:isUser,channelname:channelCreate},{withCredentials:true})
            if(resp.data=="success")
                navigate('/channel')
    }
    return(
        
    <div>
        <Grid2 height={'90vh'} width={"100vw"} color={'darkolivegreen'}> 
            <Paper elevation={10} sx={{height:"100%",width:"90%",margin:"auto",backgroundColor:"lightpink"}} >
                <Grid2 justifyItems={"center"} padding={2} >
                    <Typography variant="h5" sx={{padding:"20px"}}>Create your channel</Typography>
                        <Avatar>

                        </Avatar>
                </Grid2>
                <Stack gap={5}>
                    <Stack gap={2} width={"90%"} margin={"auto"}>
                        <label htmlFor="Name" >Name</label>
                        <TextField label="Name" required variant="standard" 
                        className=" font-semibold" data-dataid="1" value={isUser} disabled />
                    </Stack>
                    <Stack gap={2} width={"90%"} margin={"auto"}>
                        <label htmlFor="" className="">Channel Name</label>
                        <TextField label="Channel Name" required variant="standard" onChange={(e)=>setChannelcreate(e.target.value)}/>
                    </Stack>
                </Stack>
                <br />
                <Stack  width={"15%"} margin={"auto"}>
            <Button type="submit" size="small"
             color="secondary" variant="contained" onClick={handleChannel}>Submit</Button>
             </Stack>
             <Stack width={"15%"} margin={"auto"} marginTop={5}>
                <Button type="submit" size="small"
                color="error" variant="contained" onClick={()=>navigate('/channel')}>close</Button>
             </Stack>
            </Paper>
        </Grid2>
    </div>
    )
}

export default CreateChannel;