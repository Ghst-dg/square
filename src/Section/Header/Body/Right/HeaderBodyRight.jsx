import './HeaderBodyRight.css'
import HeaderCard from '../../../../Components/Card/HeaderCard/HeaderCards';

const HeaderBodyRight = () => {

    return(
        <div className="HeaderBodyRight">
            <HeaderCard bottom = {170} right = {120} mainColor = {"#00FF75"} subColor={"#FFFFFF"}/>
            <HeaderCard mainColor = {"#FFFFFF"} subColor={"#00ff75"}/>
        </div>
    );
}

export default HeaderBodyRight;