import "./Skills.scss"
import * as React from 'react';
import { styled } from '@mui/material/styles';


import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
  
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));




export default function Skills() {
    return (
        <div className='skills' id="skills" style={{backgroundImage: `url("assets/ITLB_B_BG-2.png")`}}>
            <h1 className="h1">My Skills : </h1>
            
            <BorderLinearProgress variant="determinate" value={50} />
            <BorderLinearProgress variant="determinate" value={50} />
            <BorderLinearProgress variant="determinate" value={50} />
            <BorderLinearProgress variant="determinate" value={50} />
            <BorderLinearProgress variant="determinate" value={50} />
            <BorderLinearProgress variant="determinate" value={50} />
            <BorderLinearProgress variant="determinate" value={50} />
            <BorderLinearProgress variant="determinate" value={70} />

        </div>
    )

}