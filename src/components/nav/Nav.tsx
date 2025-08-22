import { Link } from 'react-scroll';
import './style.css'

function Nav({isMenuOpen,handleMenuClick}) {

	const items = ["home","about","skills","services","portfolio","clients", "contact"]

  return (
    <nav className={isMenuOpen ? "nav active" : 'nav'}>
      <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
       {items.map((item,i) => (
			<Link to={item} key={i} className='nav-link' onClick={handleMenuClick}>{item}</Link>
		 ))}
      </ul>
    </nav>
  );
}

export default Nav;
