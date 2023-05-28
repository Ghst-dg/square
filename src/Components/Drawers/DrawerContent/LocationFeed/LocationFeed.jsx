import DrawerBtnContainer from '../../DrawerBtnContainer/DrawerBtnContainer';
import DrawerInput from '../DrawerInput/DrawerInput';
import './LocationFeed.css'

const LocationFeed = () => {
    const InputPayload = [
        {
            id: 1,
            value: "Address"
        },
        {
            id: 2,
            value: "Landmark"
        }
    ]

    return(
        <div className='LocationFeed'>
            <div className='LocationFeedMapContainer'>
                <div></div>
            </div>
            <div className='LocationFeedForm'>
                {InputPayload.map((data) => (
                    <DrawerInput key = {data.id} label={data.value}/>
                ))}
            </div>
            <DrawerBtnContainer color = {'#FF5D5D'} value = {'Set'}/>
        </div>
    );
}

export default LocationFeed;