import DrawerBtnContainer from '../../DrawerBtnContainer/DrawerBtnContainer';
import DrawerInput from '../DrawerInput/DrawerInput';
import './ProfileFeed.css'

const ProfileFeed = () => {
    const InputPayload = [
        {
            id: 1,
            value: "Name"
        },
        {
            id: 2,
            value: "Email"
        },
        {
            id: 3,
            value: "Mobile"
        },
        {
            id: 4,
            value: "Password"
        }
    ]

    return(
        <div className='ProfileFeed'>
            <div className='ProfilePhotoEdit'>
                <div className='ProfilePhotoEditContainer'>

                </div>
            </div>
            <div className='ProfileEditForm'>
                {InputPayload.map((data) => (
                    <DrawerInput key = {data.id} label={data.value}/>
                ))}
            </div>
            <DrawerBtnContainer color = {'#FF5D5D'} value = {'Save'}/>
        </div>
    );
}

export default ProfileFeed;