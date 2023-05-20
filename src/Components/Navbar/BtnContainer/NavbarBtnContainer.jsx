import { useContext } from 'react';
import NavbarBtn from '../../Button/NavbarBtn/NavbarBtn';
import './NavbarBtnContainer.css'
import { FeedDrawerOpen } from '../../../Section/Feed/Feed';

const NavbarBtnContainer = () => {
    const {setBtnIndex, setShowDrawer, testList} = useContext(FeedDrawerOpen);

    const openThisDrawer = (index) => {
        setBtnIndex(index);
        setShowDrawer(true);
    }

    return (
        <div className='NavbarBtnContainer'>
            {testList.map((data, index) => (
                <NavbarBtn key = {data.id} 
                color = {data.color} 
                value = {data.id} 
                handleClick = {() => openThisDrawer(index)}/>
            ))}
        </div>
    );
}

export default NavbarBtnContainer;