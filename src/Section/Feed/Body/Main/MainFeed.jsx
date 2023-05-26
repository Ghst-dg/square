import MainFeedBody from './Body/MainFeedBody';
import './MainFeed.css'
import FeedNavbar from './Navbar/FeedNavbar';

const MainFeed = () => {
    return (
        <div className="MainFeed">
            <FeedNavbar/>
            <MainFeedBody/>
        </div>
    );
}

export default MainFeed;