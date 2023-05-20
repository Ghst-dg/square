import './MajorBtn.css'

const MajorBtn = ({bgColor, color, title}) => {
    return (
        <button 
        style={{backgroundColor : `${bgColor}`, color : `${color}`}}
        className="MajorBtn">{title}</button>
    );
}

MajorBtn.defaultProps = {
    bgColor: '#FFFFFF',
    color: '#000000'
}

export default MajorBtn;