import './style/App.css';
import './style/Main.css';
import './style/Header.css';
import './style/Education.css';
import './style/Portfolio.css';
import './style/About.css'
import './style/MobileDrawer.css'
import 'react-slideshow-image/dist/styles.css'


import React from 'react'
import WebApp from './Interface/WebApp'
// import MobileApp from './Interface/MobileApp'

import Button from '@material-ui/core/Button';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Brightness5Icon from '@material-ui/icons/Brightness5';


class App extends React.Component {

  constructor () {
    super();
    this.state = {
        theme : 'dark',
    }
}
handleStyleChange = () => {
    const theme = this.state.theme === 'dark' ? 'dark' : 'light';
    this.setState({
        theme: theme,
    });
    document.documentElement.setAttribute("data-theme", theme);
}

 
  render() {
    document.oncontextmenu =() => {
      return false;
    }
    document.onselectstart = () => {
      return false;
    }
    
    return (
    <div>
      <WebApp />
      <Button onClick = {() => {this.handleStyleChange()}} className = "MobileTheme" >
          {this.state.theme === 'light' ? <NightsStayIcon className = "MobileThemeButton"/> : <Brightness5Icon className = "buttonIcon"/>}
      </Button>
    </div>
    )
  }
}

export default App;
