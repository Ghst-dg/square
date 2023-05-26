import CardType1 from '../../../../../Components/Card/CardType1/CardType1';
import CardType2 from '../../../../../Components/Card/CardType2/CardType2';
import './MainFeedBody.css'

const MainFeedBody = () => {
    return(
        <div className='MainFeedBody'>
            <CardType1/>
            <CardType2/>
        </div>
    );
}

export default MainFeedBody;