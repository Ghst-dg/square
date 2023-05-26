import DrawerBtnContainer from '../../DrawerBtnContainer/DrawerBtnContainer';
import ProfileFeedInput from './Input/ProfileFeedInput';
import './ProfileFeed.css'

const ProfileFeed = () => {
    return(
        <div className='ProfileFeed'>
            <div className='ProfilePhotoEdit'>
                <div className='ProfilePhotoEditContainer'>

                </div>
            </div>
            <div className='ProfileEditForm'>
                <ProfileFeedInput label={"Name"}/>
                <ProfileFeedInput label={"Email"}/>
                <ProfileFeedInput label={"Mobile"}/>
                <ProfileFeedInput label={"Password"}/>
            </div>
            <DrawerBtnContainer color = {'#FF5D5D'} value = {'Save'}/>
        </div>
    );
}

export default ProfileFeed;