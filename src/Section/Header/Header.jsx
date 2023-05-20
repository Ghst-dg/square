import './Header.css'
import HeaderHeader from './Header/HeaderHeader';
import HeaderBody from './Body/HeaderBody';

const Header = () => {
    return (
        <div className = 'Header'>
                <HeaderHeader/>
                <HeaderBody/>
        </div>
    )
}

export default Header;