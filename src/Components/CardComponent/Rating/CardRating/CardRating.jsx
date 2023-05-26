import './CardRating.css'

const CardRating = ({value, color}) => {
    return(
        <div className='CardRating' style={{backgroundColor: `${color}`}}>
            <span>
                {value}
            </span>
        </div>
    );
}

export default CardRating;