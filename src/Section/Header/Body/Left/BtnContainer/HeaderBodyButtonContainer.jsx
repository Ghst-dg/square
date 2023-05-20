import MajorBtn from '../../../../../Components/Button/MajorBtn/MajorBtn';
import './HeaderBodyLeftButtonContainer.css'

const HeaderBodyLeftButtonContainer = () => {

    // const smoothScrollToBody = () => {
    //     const element = document.querySelector('.Body');

    //     if(element)
    //     {
    //         element.scrollIntoView({behavior : 'smooth'})
    //     }
    // }

    return (
        <div className = 'HeaderBodyLeftButtonContainer'>
            <MajorBtn bgColor={"#000000"} color={"#FFFFFF"} title={"Lets Start Cooking"} />
            <MajorBtn title={"Explore More"} />
        </div>
    );
}

export default HeaderBodyLeftButtonContainer;