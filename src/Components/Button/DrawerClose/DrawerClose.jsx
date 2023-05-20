import './DrawerClose.css'

const DrawerClose = ({clickOnClose}) => {
    const handleClick = () => {
        clickOnClose(false)
    }

    return(
        <button className='DrawerClose' onClick={handleClick}>
            <div></div>
        </button>
    );
}

export default DrawerClose;