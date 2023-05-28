import Feed from './Section/Feed/Feed';
import Footer from './Section/Footer/Footer';
import Header from './Section/Header/Header';
import './Stage.css'

const Stage = () => {
    return (
        <div className="Stage">
            <Header/>
            <Feed/>
            <Footer/>
        </div>
    );
}

export default Stage;