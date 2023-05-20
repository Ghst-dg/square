import './NavbarBtn.css'

const NavbarBtn = ({color, value, handleClick}) => {
    return (
        <button className='NavbarBtn' 
        style={{backgroundColor : `${color}`}}
        onClick={handleClick}>{value}</button>
    );
}

export default NavbarBtn;