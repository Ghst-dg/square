
import CardRating from '../../CardComponent/Rating/CardRating/CardRating';
import './CardType1.css'

const CardType1 = () => {
    return(
        <div className='CardType1'>
            <div className="CardImageContainerType1">
                <div className='CardImageType1'>
                    <CardRating value={75} color={'#FF5D5D'}/>
                </div>
            </div>
            <div className="CardTextContainerType1">
                <span className='CardTitle1'>Chicken Butter Masala</span>
                <span className='CardSubtitle1'>by Badnam Munni</span>
            </div>
        </div>
    );
}

export default CardType1;