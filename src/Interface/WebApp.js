import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Button from '@material-ui/core/Button';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Brightness5Icon from '@material-ui/icons/Brightness5';

import MainPage from "../Pages/MainPage";
import EducationPage from "../Pages/EducationPage";
import PortfolioPage from "../Pages/PortfolioPage";
import AboutPage from "../Pages/AboutPage";


import Footer from '../components/Footer'




class WebApp extends React.Component {
    constructor () {
        super();
        this.state = {
            theme : 'light',
        }
    }
    handleStyleChange = () => {
        const theme = this.state.theme === 'dark' ? 'light' : 'dark';
        this.setState({
            theme: theme,
        });
        document.documentElement.setAttribute("data-theme", theme);
    }

    render() {
        return (
            <Router>
                <div className="WebApp">
                    <Routes>
                        <Route exact path='/' element={< MainPage />} />
                        <Route exact path='/education/*' element={< EducationPage />} />
                        <Route exact path='/about' element={< AboutPage />} />
                        <Route exact path='/portfolio/*' element={<PortfolioPage/>}/>
                    </Routes>
                    <Button onClick = {() => {this.handleStyleChange()}} className = "buttonTheme" >
                        {this.state.theme === 'light' ? <NightsStayIcon className = "buttonIcon"/> : <Brightness5Icon className = "buttonIcon"/>}
                    </Button>
                    <Footer />
                </div>
            </Router>
        );
    }

    
}

export default WebApp;