import './DrawerInput.css'

const DrawerInput = ({label}) => {
    return(
        <div className='DrawerInput'>
            <label htmlFor="input">{label}</label>
            <input type='text' id='input'></input>
        </div>
    );
}

export default DrawerInput;