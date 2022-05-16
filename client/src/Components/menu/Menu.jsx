import './menu.scss'

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={'menu '+ (menuOpen && "active")}>
        <ul>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#about">About Me</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#skills">Skills</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#activities">Activities</a>
            </li>
        </ul>
    </div>
  )
}
