import './DrawerBtnContainer.css'

const DrawerBtnContainer = ({color, value}) => {
    return(
        <div className='DrawerBtnContainer'>
            <button style={{'backgroundColor': `${color}`}}>{value}</button>
        </div>
    );
}

export default DrawerBtnContainer;