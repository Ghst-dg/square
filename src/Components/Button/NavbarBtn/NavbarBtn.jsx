import './NavbarBtn.css'

const NavbarBtn = ({color, value}) => {
    return (
        <button className='NavbarBtn' style={{backgroundColor : `${color}`}}>{value}</button>
    );
}

export default NavbarBtn;