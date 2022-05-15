import './Activities.scss'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tutorat from '../dialog/Tutorat';
import Donate from '../dialog/Donate';
import Nas from '../dialog/Nas';
import Sport from '../dialog/Sport';
import StudentJobs from '../dialog/StudentJobs';
import Travel from '../dialog/Travel';


export default function Activities() {
    return (
        <div className='activities' id="activities" style={{backgroundImage: `url("assets/ITLB_B_BG-2.png")`}}>
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
                            <TableCell align="left"><Tutorat/></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" className='firstcolonne'>Resetting computers to donate</TableCell>
                            <TableCell align="center">2020-2021</TableCell>
                            <TableCell align="center">At Home, Saint André</TableCell>
                            <TableCell align="center">10</TableCell>
                            <TableCell align="center">2 full days</TableCell>
                            <TableCell align="left"><Donate/></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" className='firstcolonne'>Sport</TableCell>
                            <TableCell align="center">2019-2022</TableCell>
                            <TableCell align="center">LLN, BX, Waterlo, ...</TableCell>
                            <TableCell align="center">10</TableCell>
                            <TableCell align="center">+1000</TableCell>
                            <TableCell align="left"><Sport/></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" className='firstcolonne'>Student job</TableCell>
                            <TableCell align="center">2020-2021</TableCell>
                            <TableCell align="center">SCCB</TableCell>
                            <TableCell align="center">10</TableCell>
                            <TableCell align="center">2 week (8h per day)</TableCell>
                            <TableCell align="left"><StudentJobs/></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" className='firstcolonne'>NAS deployment</TableCell>
                            <TableCell align="center">2020-2021</TableCell>
                            <TableCell align="center">Father Home</TableCell>
                            <TableCell align="center">10</TableCell>
                            <TableCell align="center">3 days (+- 15h)</TableCell>
                            <TableCell align="left"><Nas/></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" className='firstcolonne'>Travel</TableCell>
                            <TableCell align="center">2019-2021</TableCell>
                            <TableCell align="center">Word</TableCell>
                            <TableCell align="center">10</TableCell>
                            <TableCell align="center">many weeks</TableCell>
                            <TableCell align="left"><Travel/></TableCell>
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