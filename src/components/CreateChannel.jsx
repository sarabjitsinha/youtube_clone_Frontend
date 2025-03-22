import { Typography,Grid2,Paper,Avatar,TextField, Stack,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CreateChannel(){
    const navigate=useNavigate()
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
                        <label htmlFor="" >Name</label>
                        <TextField label="Name" required variant="standard" className=" font-semibold" data-dataid="1"/>
                    </Stack>
                    <Stack gap={2} width={"90%"} margin={"auto"}>
                        <label htmlFor="" className="">Channel Name</label>
                        <TextField label="Channel Name" required variant="standard"/>
                    </Stack>
                </Stack>
                <br />
                <Stack  width={"15%"} margin={"auto"}>
            <Button type="submit" size="small"
             color="secondary" variant="contained" onClick={()=>navigate('/channel')}>Submit</Button>
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