import Drawer from '../../../Components/Drawers/Drawer';
import './FeedBody.css';
import MainFeed from './Main/MainFeed';
const FeedBody = () => {
    return (
        <div className="FeedBody">
            <MainFeed/>
            <Drawer/>
        </div>
    );
}

export default FeedBody;