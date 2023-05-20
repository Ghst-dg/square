import HeaderBtn from '../../../../Components/Button/HeaderBtn/HeaderBtn';
import './HeaderHeaderButtonContainer.css'


const HeaderHeaderButtonContainer = () => {
    const btnData = [
        {
            id: 1,
            color: '#38DBFF'
        },
        {
            id: 2,
            color: '#FFF503'
        },
        {
            id: 3,
            color: '#FF5D5D'
        },
    ]

    return (
        <div className="HeaderHeaderButtonContainer">
            {btnData.map(data => (
                <HeaderBtn key = {data.id} bgColor={data.color} title={data.value}/>
            ))}
        </div>
    );
}

export default HeaderHeaderButtonContainer;