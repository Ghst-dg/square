import { useContext } from 'react';
import './DrawerPane.css'
import { FeedDrawerOpen } from '../../../Section/Feed/Feed';


const DrawerPane = () => {
    const {testList, btnIndex} = useContext(FeedDrawerOpen)

    return (
        <div className="DrawerPane"
        style={{backgroundColor: `${testList[btnIndex]?.color}`}}>
            
        </div>
    );
}

export default DrawerPane;