import './about.scss'
import Paper from '@mui/material/Paper';
import { Card } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function About() {
  
  return (
    <div className='about' id="about">
      <h1 className='h1'>About Me : </h1>
      <List
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          border: (theme) => `2px solid ${theme.palette.divider}`,
        }}
        className='list'
      >
        <ListItem >
          <ListItemAvatar>
            <Avatar>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Email" secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="white"
              >
                louis.bauchau@gmail.com
              </Typography>
            </React.Fragment>
          }/>
          <Divider orientation="vertical"/>
          <ListItemAvatar>
            <Avatar>
              <PhoneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Phone" secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="white"
              >
                +32 471 47 72 48
              </Typography>
            </React.Fragment>
          } />
        </ListItem>
      </List>
      <p className='text'>I am a student in computer science and I am doing a degree in computer technology at EPHEC. I am currently in my 3rd year and I am doing my final internship at Solarly. It is a Belgian startup that develops and distributes electrification solutions in developing countries. Next year I plan to enroll at the Catholic University of Louvain-la-Neuve, to do a 2-year master in computer science.</p>
      <h1 className='h1' >TFE : </h1>
      <h2 className='h2'>"Open source mobile application for secure collaborative communication for educational purposes."</h2>
      <p className='text'>This mobile application integrates an instant messaging allowing communication between groups and individuals. It also integrates telephone and document transfer functionalities, while keeping its exchanges encrypted and secure.</p>
      <h1 className='h1'>CV : </h1>
      <p className='text' >You will find attached my CV : <a href="CV-Louis-Bauchau.pdf">Download CV</a> </p>
    </div>
  )
}
