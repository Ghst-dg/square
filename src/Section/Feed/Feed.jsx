import { createContext, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import FeedBody from './Body/FeedBody';
import './Feed.css'

export const FeedDrawerOpen = createContext(null);

const Feed = () => {
    const testList = [
        {
            id: 0,
            color: "#38dbff",
        },
        {
            id: 1,
            color: "#ffb443",
        },
        {
            id: 2,
            color: "#ff5d5d",
        },
        {
            id: 3,
            color: "#fff503",
        },
        {
            id: 4,
            color: "#00ff75",
        },
        {
            id: 5,
            color: "#dd7dff",
        }
    ];
    const [btnIndex, setBtnIndex] = useState();
    const [showDrawer, setShowDrawer] = useState(false);

    return (
        <div className="Feed">
            <FeedDrawerOpen.Provider value = {{btnIndex, setBtnIndex, showDrawer, setShowDrawer, testList}}>
                <Navbar/>
                <FeedBody/>
            </FeedDrawerOpen.Provider>
        </div>
    );
}

export default Feed;