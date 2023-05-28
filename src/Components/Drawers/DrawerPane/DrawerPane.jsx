import { useContext } from 'react';
import './DrawerPane.css'
import { FeedDrawerOpen } from '../../../Section/Feed/Feed';
import HistoryFeed from '../DrawerContent/HistoryFeed/HistoryFeed';


const DrawerPane = () => {
    const {testList, btnIndex} = useContext(FeedDrawerOpen)

    return (
        <div className="DrawerPane"
        style={{backgroundColor: `${testList[btnIndex]?.color}`}}>
            
        </div>
    );
}

export default DrawerPane;