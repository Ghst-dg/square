import './HeaderBody.css'
import HeaderBodyLeft from './Left/HeaderBodyLeft';
import HeaderBodyRight from './Right/HeaderBodyRight';

const HeaderBody = () => {
    return (
        <div className="HeaderBody">
            <HeaderBodyLeft/>
            <HeaderBodyRight/>
        </div>
    );
}

export default HeaderBody;