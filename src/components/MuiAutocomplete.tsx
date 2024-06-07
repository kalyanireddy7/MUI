import {Stack,Autocomplete,TextField} from '@mui/material'
import { useState } from 'react'
const skills=['HTML','CSS','JavaScript','React']
export const MuiAutocomplete=()=>{
    const [value,setValue]=useState<string|null>(null)
    return(
        <div>
            <Stack spacing={2} width='250px'>
               <Autocomplete options={skills} renderInput={(params)=><TextField {...params} label='skills'/>} 
               value={value}
               onChange={(event:any,newValue:string|null)=>setValue(newValue)}/>
            </Stack>
        </div>
    )
}