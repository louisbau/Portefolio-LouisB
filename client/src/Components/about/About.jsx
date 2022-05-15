import './about.scss'
import { green, pink, red, purple } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BadgeIcon from '@mui/icons-material/Badge';
import Divider from '@mui/material/Divider';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';

export default function About() {
  
  return (
    <div className='about' id="about" style={{backgroundImage: `url("assets/ITLB_B_BG-2.png")`}}>
      <Grid container spacing={2}>
        <Grid item xs={'auto'}>
          <h1 className='h1'>About Me : </h1>
        </Grid>
        <Grid item xs={'auto'}>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'row',
              padding: 0,
              margin: '0 0 0 20px',
              border: (theme) => `2px solid ${theme.palette.divider}`,
            }}
            className='list'
            id="list"
          >
            <ListItem sx={{ padding: '0 0 0 20px', width:'65%'}}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: pink[500] }}>
                  <BadgeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="black"
                  >
                    Name :
                  </Typography>
                </React.Fragment>
                } secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body1"
                    color="black"
                  >
                    Louis Bauchau
                  </Typography>
                </React.Fragment>
              }/>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 20px' }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: green[500] }}>
                  <HomeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline', width:'fit-content' }}
                    component="span"
                    variant="body2"
                    color="black"
                  >
                    Adresse :
                  </Typography>
                </React.Fragment>
                } secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body1"
                    color="black"
                  >
                    Chaussée de stockel, 324 Woluwé Saint Pierre
                  </Typography>
                </React.Fragment>
              }/>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 20px', width:'85%' }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: red[500] }}>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="black"
                  >
                    Email :
                  </Typography>
                </React.Fragment>
              } secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body1"
                    color="black"
                  >
                    louis.bauchau@gmail.com
                  </Typography>
                </React.Fragment>
              }/>
            </ListItem>
            <ListItem sx={{ padding: '0 0 0 20px', width:'65%' }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: purple[500] }}>
                  <PhoneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body1"
                    color="black"
                  >
                    Phone : 
                  </Typography>
                </React.Fragment>
              } secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="black"
                  >
                    +32 471 47 72 48
                  </Typography>
                </React.Fragment>
              } />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <p className='text'>I am a student in computer science and I am doing a degree in computer technology at EPHEC. I am currently in my 3rd year and I am doing my final internship at Solarly. It is a Belgian startup that develops and distributes electrification solutions in developing countries. Next year I plan to enroll at the Catholic University of Louvain-la-Neuve, to do a 2-year master in computer science.</p>
      <h1 className='h1' >TFE : </h1>
      <h2 className='h2'>"Open source mobile application for secure collaborative communication for educational purposes."</h2>
      <p className='text'>This mobile application integrates an instant messaging allowing communication between groups and individuals. It also integrates telephone and document transfer functionalities, while keeping its exchanges encrypted and secure.</p>
      <h1 className='h1'>CV : </h1>
      <p className='text' >You will find attached my CV : <a href="CV-Louis-Bauchau.pdf">Download CV</a> </p>
    </div>
  )
}
