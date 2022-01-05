import React from 'react'
import { Link } from 'react-router-dom'
import { Drawer, Divider }  from '@material-ui/core';


class MobileDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: props.page,
            isDrawerOpened: false,
        };
    }
    
    toggleDrawerStatus = () => {
        this.setState({
            isDrawerOpened: true,
        })
    }
    
    closeDrawer = () => {
        this.setState({
            isDrawerOpened: false,
        })
    }

    
    render() {
        const { isDrawerOpened } = this.state;
        const mobileStyle = {
            transform: "none",
            textDecoration: "none",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: "23px"
        }
        return (
            <div className = "header" id="header">
                <span onClick={()=>{this.toggleDrawerStatus()}} className = "header-left" style = {mobileStyle}>TOMOYOSHI KIMURA</span>
                <Divider/>
                <Drawer
                variant="temporary"
                open={isDrawerOpened}
                onClose={this.closeDrawer}
                paper= {{width: "50vw"}}>
                    <div className="drawer">
                        <Link className='drawerLink' to='/' style={this.state.page === 'main' ? {color: "rgb(255, 85, 46)"} : null}>
                            MAIN
                        </Link>

                        <Link className='drawerLink' to='/education' style={this.state.page === 'education' ? {color: "rgb(255, 85, 46)"} : null}>
                            EDUCATION
                        </Link>

                        <Link className='drawerLink' to='/portfolio' style={this.state.page === 'portfolio' ? {color: "rgb(255, 85, 46)"} : null}>
                            PORTFOLIO
                        </Link>
                        <Link className='drawerLink' to='/about' style={this.state.page === 'about' ? {color: "rgb(255, 85, 46)"} : null}>
                            ABOUT
                        </Link>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default MobileDrawer