import NavbarBtn from '../../Button/NavbarBtn/NavbarBtn';
import './NavbarBtnContainer.css'

const NavbarBtnContainer = () => {
    const btnList = [
        {
            id: 0,
            color: "#38dbff",
        },
        {
            id: 1,
            color: "#ffb443",
        },
        {
            id: 2,
            color: "#ff5d5d",
        },
        {
            id: 3,
            color: "#fff503",
        },
        {
            id: 4,
            color: "#00ff75",
        },
        {
            id: 5,
            color: "#dd7dff",
        }
    ];

    return (
        <div className='NavbarBtnContainer'>
            {btnList.map(data => (
                <NavbarBtn key = {data.id} color = {data.color} value = {data.id}/>
            ))}
        </div>
    );
}

export default NavbarBtnContainer;