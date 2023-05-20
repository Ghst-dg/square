import './HeaderCard.css'
import ReactCurvedText from "react-curved-text";
import './headerCard.png'

const HeaderCard = ({bottom, right, mainColor, subColor}) => {
    return(
        <div className = "HeaderCard" style={{bottom: bottom, right: right, backgroundColor: mainColor}}>
            <div className='HeaderCardBody'>
                <div className='HeaderCardPatch'>
                    <div className='HeaderPatchText'>
                        <ReactCurvedText width='195'
                        height='195'
                        cx='100'
                        cy='100'
                        rx='75'
                        ry='75'
                        startOffset='0'
                        reversed={true}
                        text='THE-RUMBLING-POTATO...................................'
                        textProps={{"style": {"fontSize": "28"}}}
                        textPathProps={null}
                        tspanProps={null}
                        ellipseProps={null}
                        svgProps={null}/>
                    </div>
                    <img src = 'headerCard.png' alt = 'patch'/>
                </div>
            </div>
            <div className='HeaderCardTitle' style={{backgroundColor: subColor}}><span>The Rumbling Potato</span></div>
        </div>
    );
}

export default HeaderCard;