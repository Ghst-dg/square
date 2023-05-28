import CardType1 from '../../../Card/CardType1/CardType1';
import CardType2 from '../../../Card/CardType2/CardType2';
import './HistoryFeed.css'

const HistoryFeed = () => {
    const cardStyle ={
        margin: 'auto',
        marginTop: '25px',
    }

    return(
        <div className='HistoryFeed'>
            <div className='HistoryFeedTitle'>What You Ate</div>
            <div className='HistoryCardContainer'>
                <CardType1 style={cardStyle}/>
                <CardType2 style={cardStyle}/>
                <CardType1 style={cardStyle}/>
                <CardType2 style={cardStyle}/>
            </div>
        </div>
    );
}

export default HistoryFeed;