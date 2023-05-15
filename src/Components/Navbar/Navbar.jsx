import './Navbar.css'
import NavbarBtnContainer from './BtnContainer/NavbarBtnContainer';
import NavbarTilte from './Title/NavbarTitle';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <NavbarTilte/>
            <NavbarBtnContainer/>
        </div>
    );
}

export default Navbar;