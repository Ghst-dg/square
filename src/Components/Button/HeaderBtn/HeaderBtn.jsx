import './HeaderBtn'

const HeaderBtn = ({bgColor, title}) => {
    return(
        <button style={{backgroundColor : `${bgColor}`}} className="HeaderBtn">{title}</button>
    );
}

export default HeaderBtn;