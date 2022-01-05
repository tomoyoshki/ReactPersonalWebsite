import React from 'react'
import {Link} from "react-router-dom";
import tk_1 from '../assets/tk_1.png'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class MainPage extends React.Component{
    constructor(props) {
        super()
        this.state = {
            screenType: props.screenType,
            theposition: 0,
            innerWidth: window.innerWidth
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.timerId = setInterval(() => {
            const show = document.querySelector('span[data-show]')
            const next = show.nextElementSibling || document.querySelector('#english')
            const up = document.querySelector('span[data-up]')
    
            if(up) {
                up.removeAttribute('data-up')
            }
            show.removeAttribute('data-show')
            show.setAttribute('data-up', '')
            next.setAttribute('data-show', '')
        }, 4000)
        window.addEventListener('scroll', this.listenToScroll);
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
    // make sure to remove the listener
    // when the component is not mounted anymore
    componentWillUnmount() {
        clearInterval(this.timerId)
        window.removeEventListener('scroll', this.listenToScroll);
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = winScroll / height
        this.setState({
            theposition: scrolled,
        })
    }

    AnimationText = () => {
        return (
            <div className = "box" id = "mask">
                <span data-show className = "world" id = "english">
                    <div className = "world_word">
                        <div className="text">H</div>
                        <div className="text">E</div>
                        <div className="text">L</div>
                        <div className="text">L</div>
                        <div className="text">O&nbsp;</div>
                        <div className="text">W</div>
                        <div className="text">O</div>
                        <div className="text">R</div>
                        <div className="text">L</div>
                        <div className="text">D</div>
                        <div className="text">!</div>
                    </div>
                </span>
                <span className = "world" id = "mandarin" >
                    <div className = "world_word">
                        <div className="text">你</div>
                        <div className="text">好</div>
                        <div className="text">世</div>
                        <div className="text">界</div>
                        <div className="text">!</div>
                    </div>
                </span>
                <span className = "world" id = "japanese">
                    <div className = "world_word">
                        <div className="text">こ</div>
                        <div className="text">ん</div>
                        <div className="text">に</div>
                        <div className="text">ち</div>
                        <div className="text">は&nbsp;</div>
                        <div className="text">世</div>
                        <div className="text">界</div>
                        <div className="text">!</div>
                    </div>
                </span>
            </div>
        )
    }

    FirstName = () => {
        return (
            <div className = "box"
                style = {{
                    justifyContent: 'center',
                }}>
                <div className="text" id="j">I</div>
                <div className="text" id="j">'</div>
                <div className="text" id="j">M&nbsp;&nbsp;</div>
                <div className= "text">T</div>
                <div className= "text">O</div>
                <div className= "text">M</div>
                <div className= "text">O</div>
                <div className= "text">Y</div>
                <div className= "text">O</div>
                <div className= "text">S</div>
                <div className= "text">H</div>
                <div className= "text">I</div>
            </div>
        )
    }

    LastName = () => {
        return (
            <div className = "box" 
                style = {{
                    justifyContent: 'flex-end',
                }}>
                <div className="text">K</div>
                <div className="text">I</div>
                <div className="text">M</div>
                <div className="text">U</div>
                <div className="text">R</div>
                <div className="text">A</div>
                <div className="text">.</div>
            </div>
        )
    }

    Name = () => {
        return(
            <div className = "fullName" id="main">
                {this.AnimationText()}
                {this.FirstName()}
                {this.LastName()}
            </div>
        );
    }

    ThirdPage = () => {
        return (
            <div className='subPage' id="sub">
                <div className='webCard'>
                    <div className = "half" id="cardImg">
                        <img src = {tk_1} alt = "Profile" />
                    </div>
                    <div className = "half" id="cardLink">
                        <Link className = "pbb" to="/education">
                            EDUCATION
                        </Link>
                        <Link className = "pbb" to="/portfolio">
                            PORTFOLIO
                        </Link>
                        <Link className = "pbb" to="/about">
                            ABOUT
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let style1 = {backgroundColor: "rgb(255, 85, 46)"}
        let dot1 = {}
        let dot2 = {}
        if(this.state.theposition > 0.5) {
            dot2 = style1
            dot1 = {}
        } else {
            dot1 = style1
            dot2 = {}
        }
        return (
            <div className='mainPage'>
                {this.Name()}
                {/* {this.SecondPage()} */}
                {/* {this.SubPage()} */}
                {this.ThirdPage()}
                <div className='dots'>
                    <a href="#main" className="dot" style={dot1}> </a>
                    <a href="#sub" className="dot" style={dot2}> </a>
                </div>
            </div>
        )
    }
}

export default MainPage