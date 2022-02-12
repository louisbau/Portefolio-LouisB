import './topbar.scss'
import {Person, Mail} from '@mui/icons-material'

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>
                </div>
            </div>
            <div className="right">
                
                <div className="itemContainer">
                    <Person className='icon' />
                    <span>+32 471 47 72 48</span>
                </div>
                <div className="itemContainer">
                    <Mail className='icon' />
                    <span>louis.bauchau@gmail.com</span>
                </div>
                <a href='#intro'className='logo'>L42</a>
            </div>
        </div>
    </div>
  )
}
