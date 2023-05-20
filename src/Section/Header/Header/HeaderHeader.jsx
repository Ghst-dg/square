import './HeaderHeader.css'
import HeaderHeaderButtonContainer from './ButtonsContainer/HeaderHeaderButtonContainer';

const HeaderHeader = () => {
    return (
        <div className = 'HeaderHeader'>
            <h1>The Rumbling Potato</h1>
            <HeaderHeaderButtonContainer/>
        </div>
    )
}

export default HeaderHeader;