import { useContext} from 'react';
import DrawerClose from '../Button/DrawerClose/DrawerClose';
import './Drawer.css'
import DrawerPane from './DrawerPane/DrawerPane';
import { FeedDrawerOpen } from '../../Section/Feed/Feed';

const Drawer = () => {
    const {showDrawer, setShowDrawer} = useContext(FeedDrawerOpen);

    return (
        <div className="Drawer" style={{display: showDrawer ? 'block' : 'none'}}>
            <DrawerClose clickOnClose={setShowDrawer}/>
            <DrawerPane/>
        </div>
    );
}

export default Drawer;