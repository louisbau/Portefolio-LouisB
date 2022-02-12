import './topbar.scss'
import { Mail} from '@mui/icons-material'
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
                <div className="social-links">
                    <a href='https://github.com/louisbau' target="_blank"><GitHubIcon className="icon"/></a>
                    <a href='https://fr.linkedin.com/' target="_blank"><LinkedInIcon className="icon" /></a>
                    <a href='#about'><Mail className="icon" /></a>
                    <a href='#about'><PhoneIcon className="icon" /></a>
                    <span className='line2'></span>
                </div>
            </div>
        </div>
    </div>
  )
}
