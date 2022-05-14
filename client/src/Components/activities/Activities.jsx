import './Activities.scss'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function Activities() {
    return (
        <div className='activities' id="activities">
            <TableContainer component={Paper} sx={{ minWidth: 800, maxWidth: 1400 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" className='head'>Activities</TableCell>
                            <TableCell align="center" className='head'>Date</TableCell>
                            <TableCell align="center" className='head'>Place</TableCell>
                            <TableCell align="center" className='head'>Valued hours </TableCell>
                            <TableCell align="center" className='head'>Total hours or days or weeks</TableCell>
                            <TableCell align="left" className='head'>Description :</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center" className='firstcolonne'>Tutorat</TableCell>
                            <TableCell align="center">2019-2022</TableCell>
                            <TableCell align="center">Ephec</TableCell>
                            <TableCell align="center">10</TableCell>
                            <TableCell align="center">+15</TableCell>
                            <TableCell align="left">I have given more than 10 hours of courses at EPHEC in Mathematics and Development since my first year.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" className='firstcolonne'>Resetting computers to donate</TableCell>
                            <TableCell align="center">2020-2021</TableCell>
                            <TableCell align="center">At Home, Saint André</TableCell>
                            <TableCell align="center">10</TableCell>
                            <TableCell align="center">2 full days</TableCell>
                            <TableCell align="left">I have reset more than 5 laptops to give to my former elementary school, Saint Andre. because during the pandemic many primary school students did not have access to laptops at home</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" className='firstcolonne'>Sport</TableCell>
                            <TableCell align="center">2019-2022</TableCell>
                            <TableCell align="center">LLN, BX, Waterlo, ...</TableCell>
                            <TableCell align="center">10</TableCell>
                            <TableCell align="center">+300</TableCell>
                            <TableCell align="left">I do at least 4 hours of sport a week since I was a kid and I still play field hockey at LLN every Wednesday and I also play soccer on Saturday</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" className='firstcolonne'>Student job</TableCell>
                            <TableCell align="center">2020-2021</TableCell>
                            <TableCell align="center">SCCB</TableCell>
                            <TableCell align="center">10</TableCell>
                            <TableCell align="center">2 week (8h per day)</TableCell>
                            <TableCell align="left">I have been working as a ... in the company SCCB during 2 weeks </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" className='firstcolonne'>NAS deployment</TableCell>
                            <TableCell align="center">2020-2021</TableCell>
                            <TableCell align="center">Father Home</TableCell>
                            <TableCell align="center">10</TableCell>
                            <TableCell align="center">3 days (+- 15h)</TableCell>
                            <TableCell align="left">I have installed and configured a NAS to allow my father to store photos as he is a photographer</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" className='firstcolonne'>Travel</TableCell>
                            <TableCell align="center">2019-2021</TableCell>
                            <TableCell align="center">Word</TableCell>
                            <TableCell align="center">10</TableCell>
                            <TableCell align="center">many weeks</TableCell>
                            <TableCell align="left">I had the chance to do a lot of travelling after and before the pandemic, I went to Venice, Switzerland, Egypt and Lisbon, Palma, ...</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" className='head'>Total : </TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell align="center" className='head'>60H</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}