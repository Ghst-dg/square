import Feed from './Section/Feed/Feed';
import Header from './Section/Header/Header';
import './Stage.css'

const Stage = () => {
    return (
        <div className="Stage">
            <Header/>
            <Feed/>
        </div>
    );
}

export default Stage;