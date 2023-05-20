import './HeaderBodyLeft.css'
import HeaderBodyLeftButtonContainer from './BtnContainer/HeaderBodyButtonContainer';

const HeaderBodyLeft = () => {
    return(
        <div className="HeaderBodyLeft">
            <span>Anyone can cook…but only the fearless can be great.</span>
            <HeaderBodyLeftButtonContainer/>
        </div>
    );
}

export default HeaderBodyLeft;