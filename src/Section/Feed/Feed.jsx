import Navbar from '../../Components/Navbar/Navbar';
import FeedBody from './Body/FeedBody';
import './Feed.css'

const Feed = () => {
    return (
        <div className="Feed">
            <Navbar/>
            <FeedBody/>
        </div>
    );
}

export default Feed;