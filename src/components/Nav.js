import { Link } from 'react-scroll'

export default function Nav() {
  return (
    <div className="nav">
      <ul className="navbar">
        <li className="navbar-item"><Link className="link" activeClass="active" to="hero" spy={true} smooth={true} duration={500}>Home</Link></li>
        <li className="navbar-item"><Link className="link" activeClass="active" to="brand" offset={-35} spy={true} smooth={true} duration={500}>Brand</Link></li>
        <li className="navbar-item"><Link className="link" activeClass="active" to="project" offset={-35} spy={true} smooth={true} duration={500}>Projects</Link></li>
        <li className="navbar-item"><Link className="link" activeClass="active" to="music" offset={-35} spy={true} smooth={true} duration={500}>Music</Link></li>
        <li className="navbar-item"><Link className="link" activeClass="active" to="contact" offset={-35} spy={true} smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </div>
  )
}