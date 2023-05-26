import './FeedNavbar.css'
import FeedLocation from './Location/FeedLocation';
import FeedSearch from './Search/FeedSearch';

const FeedNavbar = () => {
    return(
        <div className='FeedNavbar'>
            <FeedSearch/>
            <FeedLocation/>
        </div>
    );
}

export default FeedNavbar;