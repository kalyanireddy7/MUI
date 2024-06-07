import { Button,Stack } from "@mui/material"

export const MuiButton=()=>{
    return(
        <div>
            <Stack spacing={4}>
            <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            </Stack>
            
           <Stack spacing={2} direction="row">
           <Button color="primary" variant="contained">primary</Button>
           <Button color="secondary" variant="contained">secondary</Button>
           <Button color="warning" variant="contained">warning</Button>
           <Button color="info" variant="contained">info</Button>
           <Button color="success" variant="contained">success</Button>
           <Button color="error" variant="contained">danger</Button>
           </Stack>
           <Stack display='block' spacing={2} direction="row">
              <Button variant="contained" size="small">NKR</Button>
              <Button variant="contained" size="medium">NKR</Button>
              <Button variant="contained" size="large">NKR</Button>
           </Stack>
          
           </Stack>
        </div>
    )
}