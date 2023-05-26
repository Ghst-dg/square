import './ProfileFeedInput.css'

const ProfileFeedInput = ({label}) => {
    return(
        <div className='ProfileFeedInput'>
            <label htmlFor="input">{label}</label>
            <input type='text' id='input'></input>
        </div>
    );
}

export default ProfileFeedInput;